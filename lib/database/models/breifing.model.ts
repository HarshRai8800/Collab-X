import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IBriefing extends Document {
  message?: string;
  deadline?: Date;
  createdAt: Date;
}

const BriefingSchema: Schema<IBriefing> = new Schema<IBriefing>({
  message: { type: String },
  deadline: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

// Prevent model overwrite in dev
const Briefing = models.Briefing || model<IBriefing>('Briefing', BriefingSchema);

export default Briefing;
