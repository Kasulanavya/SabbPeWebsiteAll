# Animation Zones - Team Guide

## 🎨 Where to Add Custom Animations

This guide shows all the strategic locations where your team can add custom animations across the website.

---

## 📍 Location 1: Hero Sections (All Pages)
**File Pattern:** `src/app/technology/*/components/*Hero.tsx`

**Current State:** Hero animations already implemented with:
- Background glows (pulsing effects)
- Floating/pulsing icons
- Staggered text entry

**Where to add MORE:**
```tsx
// Add custom animations AFTER the subtitle, BEFORE the CTA button
<motion.div className={styles.customAnimation}>
  {/* Your team's custom animation here */}
</motion.div>
```

**Best for:**
- Product demos
- Animated illustrations
- Interactive elements
- 3D graphics

---

## 📍 Location 2: Between Sections (Strategic Transitions)
**Files:** Any `page.tsx` file

**Example locations:**
```tsx
<CloudHero />
<CloudCapabilities />
{/* 👇 ADD ANIMATION ZONE HERE 👇 */}
<AnimationPlaceholder 
  id="cloud-transition-1"
  title="Custom Animation Zone"
  description="Add smooth transitions or standalone animations"
/>
{/* 👆 ANIMATION ZONE 👆 */}
<CloudScalingFlow />
```

**Best for:**
- Section transitions
- Data visualizations
- Product showcases
- Interactive infographics

---

## 📍 Location 3: Homepage Sections
**File:** `src/app/page.tsx`

**Suggested zones:**
1. **After Hero, Before Features** - Attention-grabbing animation
2. **Between Technology Showcase & Services** - Brand storytelling
3. **Before Footer** - Final call-to-action animation

**Best for:**
- Company story animations
- Product ecosystem visualization
- Client testimonials (animated)
- Statistics/metrics (animated counters)

---

## 📍 Location 4: Feature Cards (Interactive Elements)
**File Pattern:** `src/app/technology/*/components/*Capabilities.tsx` or `*Features.tsx`

**Current State:** Cards have hover effects and sequential reveals

**Where to add MORE:**
```tsx
<div className={styles.card}>
  <span className={styles.icon}>{capability.icon}</span>
  
  {/* 👇 ADD CUSTOM ICON ANIMATION HERE 👇 */}
  <motion.div className={styles.iconAnimation}>
    {/* Your custom animation */}
  </motion.div>
  {/* 👆 CUSTOM ANIMATION 👆 */}
  
  <h3>{capability.title}</h3>
  <p>{capability.description}</p>
</div>
```

**Best for:**
- Animated icons (Lottie files)
- Micro-interactions
- Hover effects
- Loading states

---

## 📍 Location 5: Custom Animation Placeholders
**Usage:** Import and place anywhere

```tsx
import { AnimationPlaceholder } from '@/components/AnimationPlaceholder/AnimationPlaceholder';

// In your page component:
<AnimationPlaceholder 
  id="unique-id-here"
  title="Animation Title"
  description="What this animation should show"
  height="400px"
/>
```

**Each placeholder includes:**
- ✅ Framer Motion already imported
- ✅ Viewport detection (animation on scroll)
- ✅ Clear instructions
- ✅ Example animation structure

---

## 🎯 Recommended Animation Zones by Priority

### HIGH PRIORITY (Maximum User Impact)
1. **Homepage Hero** - First impression animation
2. **Technology Flow Sections** - Already created, can be enhanced
3. **Homepage "Why Choose Us"** - Brand differentiation

### MEDIUM PRIORITY
4. **Feature Cards** - Interactive micro-animations
5. **Benefits/Metrics Sections** - Animated counters/progress
6. **Technology Page Heroes** - Enhanced product demos

### LOW PRIORITY (Nice to Have)
7. **Section Transitions** - Smooth page flow
8. **Footer Animations** - Subtle brand touches
9. **Loading States** - Better UX

---

## 🛠️ How to Use Animation Placeholders

### Step 1: Add to any page
```tsx
import { AnimationPlaceholder } from '@/components/AnimationPlaceholder/AnimationPlaceholder';

export default function YourPage() {
  return (
    <>
      <SomeSection />
      
      <AnimationPlaceholder 
        id="payment-flow-demo"
        title="UPI Payment Flow Animation"
        description="Show how payments work in real-time"
        height="500px"
      />
      
      <AnotherSection />
    </>
  );
}
```

### Step 2: Your team customizes
Open `AnimationPlaceholder.tsx` and replace the content between:
```tsx
{/* 👇 ADD YOUR CUSTOM ANIMATION HERE 👇 */}
// Replace this entire section
{/* 👆 ADD YOUR CUSTOM ANIMATION ABOVE 👆 */}
```

### Step 3: Create specific components
For production, create separate components:
```
src/components/
  ├── UPIPaymentAnimation/
  │   ├── UPIPaymentAnimation.tsx
  │   └── UPIPaymentAnimation.module.css
  ├── DataFlowAnimation/
  └── ProductDemoAnimation/
```

---

## 📦 Animation Libraries Already Installed

✅ **Framer Motion** - Primary animation library
- Installed: `framer-motion@11.x`
- Usage: `import { motion } from 'framer-motion';`
- Docs: https://www.framer.com/motion/

### Recommended Additional Libraries

**For Lottie Animations (JSON-based):**
```bash
npm install lottie-react
```

**For 3D Animations:**
```bash
npm install @react-three/fiber @react-three/drei three
```

**For Particle Effects:**
```bash
npm install tsparticles @tsparticles/react
```

**For SVG Animations:**
```bash
npm install react-spring
```

---

## 💡 Animation Best Practices

### DO:
✅ Keep animations under 0.8s for UI interactions
✅ Use 2-4s loops for ambient animations
✅ Add `viewport={{ once: true }}` to prevent re-animations
✅ Test on mobile devices (performance)
✅ Use `will-change` CSS for heavy animations
✅ Add `prefers-reduced-motion` support

### DON'T:
❌ Animate on every scroll (causes motion sickness)
❌ Use more than 2-3 animations simultaneously
❌ Forget loading states for heavy animations
❌ Use animations longer than 1.5s for interactions
❌ Animate large images without optimization

---

## 🎬 Example Animation Ideas

### For SabbPe UPI Payment Page:
1. **Payment Journey Animation**
   - Card scan → Processing → Success checkmark
   - Use icons flowing through steps

2. **Security Visualization**
   - Lock/unlock animations
   - Shield with pulse effect
   - Data encryption visualization

3. **Transaction Speed**
   - Speed meter animation
   - Progress bars racing
   - Timer countdown

4. **Money Flow**
   - Currency symbols flowing
   - Account balance updating
   - Transfer visualization

---

## 📞 Questions?

Each animation placeholder includes:
- Unique ID for tracking
- Clear instructions
- Example structure
- Links to reference components

Check existing flow components for inspiration:
- `AIProcessFlow.tsx` - Step-by-step process
- `MLLearningFlow.tsx` - Timeline visualization  
- `DataFlowVisualization.tsx` - Data transformation
- `CloudScalingFlow.tsx` - Auto-scaling demo
- `BlockCreationFlow.tsx` - Blockchain process
- `IoTConnectionFlow.tsx` - Device connectivity
- `ChatConversationFlow.tsx` - Chat interaction
- `PWAInstallFlow.tsx` - App installation
- `MetaversePaymentFlow.tsx` - Virtual commerce

---

**Last Updated:** January 20, 2026
**Maintained by:** Development Team
