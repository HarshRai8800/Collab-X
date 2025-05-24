"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import * as THREE from "three"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (!canvasRef.current) return
    
    // Initialize Three.js
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    
    // Create animated network of spheres and connections
    const sphereGroup = new THREE.Group()
    scene.add(sphereGroup)
    
    // Create spheres
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.8
    })
    
    interface SphereVelocity {
      x: number
      y: number
      z: number
    }

    interface SpherePosition {
      x: number
      y: number
      z: number
      velocity: SphereVelocity
    }

    const spherePositions: SpherePosition[] = []
    const sphereCount = 15
    
    for (let i = 0; i < sphereCount; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      
      // Position randomly but within a certain space
      sphere.position.x = (Math.random() - 0.5) * 10
      sphere.position.y = (Math.random() - 0.5) * 6
      sphere.position.z = (Math.random() - 0.5) * 5
      
      spherePositions.push({
        x: sphere.position.x,
        y: sphere.position.y,
        z: sphere.position.z,
        velocity: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        }
      })
      
      sphereGroup.add(sphere)
    }
    
    // Create connections between close spheres
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xAFBBF2,
      transparent: true,
      opacity: 0.5
    })
    
    function updateConnections() {
      // Remove old lines
      sphereGroup.children.forEach(child => {
        if (child instanceof THREE.Line) {
          sphereGroup.remove(child)
        }
      })
      
      // Create new connections between close spheres
      for (let i = 0; i < sphereCount; i++) {
        for (let j = i + 1; j < sphereCount; j++) {
          const sphere1 = sphereGroup.children[i] as THREE.Mesh
          const sphere2 = sphereGroup.children[j] as THREE.Mesh
          
          const distance = sphere1.position.distanceTo(sphere2.position)
          
          if (distance < 3) {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              sphere1.position,
              sphere2.position
            ])
            const line = new THREE.Line(lineGeometry, lineMaterial)
            sphereGroup.add(line)
          }
        }
      }
    }
    
    // Animation
    function animate() {
      requestAnimationFrame(animate)
      
      // Update sphere positions
      for (let i = 0; i < sphereCount; i++) {
        const sphere = sphereGroup.children[i] as THREE.Mesh
        const position = spherePositions[i]
        
        sphere.position.x += position.velocity.x
        sphere.position.y += position.velocity.y
        sphere.position.z += position.velocity.z
        
        // Bounce when hitting boundaries
        if (Math.abs(sphere.position.x) > 5) {
          position.velocity.x *= -1
        }
        if (Math.abs(sphere.position.y) > 3) {
          position.velocity.y *= -1
        }
        if (Math.abs(sphere.position.z) > 2.5) {
          position.velocity.z *= -1
        }
      }
      
      updateConnections()
      
      // Rotate the entire group
      sphereGroup.rotation.y += 0.001
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Handle window resizing
    const handleResize = () => {
      if (!canvasRef.current) return
      
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])
  
  return (
    <section className="relative px-4 py-20 md:py-32 lg:py-40 overflow-hidden h-screen">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10"
      />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Connect Brands With Micro-Creators
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Distribute your campaign budget across a network of micro-influencers for better ROI 
            and more authentic engagement than traditional celebrity endorsements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/brands"
              className={buttonVariants({ size: "lg" })}
            >
              I'm a Brand
            </Link>
            <Link
              href="/creators"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              I'm a Creator
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}