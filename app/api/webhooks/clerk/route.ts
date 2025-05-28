import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';
import { createUser, updateUser, deleteUser } from '@/lib/actions/user';

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req, {
      signingSecret: process.env.WEBHOOK_SECRET,
    });
    
    // Access the event data
    const { id } = evt.data;
    const eventType = evt.type;
  if(id==undefined){
    console.error('Webhook event does not contain a valid ID:', evt);
    return new Response('Invalid event data', { status: 400 });
  }
    // Handle specific event types
    if (evt.type === 'user.created') {
      console.log('New user created:', evt.data.id);
      // Handle user creation
      await createUser({
        clerkId: id,
        email: evt.data.email_addresses?.[0]?.email_address || '',
        name: `${evt.data.first_name ?? ''} ${evt.data.last_name ?? ''}`.trim(),
        role: 'creator',
        profileImage: evt.data.image_url,
        loginMethod: 'email'
      });
    }

    if (evt.type === 'user.updated') {
      await updateUser(id, {
        email: evt.data.email_addresses?.[0]?.email_address || '',
        name: `${evt.data.first_name ?? ''} ${evt.data.last_name ?? ''}`.trim(),
        profileImage: evt.data.image_url
      });
    }

    if (evt.type === 'user.deleted') {
      await deleteUser(id);
    }

    return new Response('Success', { status: 200 });
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return new Response('Webhook verification failed', { status: 400 });
  }
}
