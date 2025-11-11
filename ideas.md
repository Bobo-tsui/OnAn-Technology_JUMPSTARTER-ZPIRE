# OnAn Technology Website - Design Ideas

## Chosen Design Direction

### Visual Style: **Elegant Minimalism with Technological Sophistication**

This design combines the solemnity and respect required for posthumous services with the innovation and precision of AI technology. The aesthetic balances emotional warmth with professional credibility.

### Color Palette

**Primary Colors:**
- **Deep Navy Blue** (#0A1628): Trust, professionalism, depth - used for headers and key sections
- **Soft Ivory/Cream** (#F8F6F3): Warmth, peace, dignity - main background color
- **Warm Gold Accent** (#C9A961): Premium quality, hope, light - used sparingly for CTAs and highlights

**Secondary Colors:**
- **Cool Teal** (#2D7A8F): Innovation, technology, clarity - for technology sections
- **Soft Gray** (#E5E5E5): Subtle dividers and secondary backgrounds
- **Pure White** (#FFFFFF): Clean sections and cards

**Text Colors:**
- **Primary Text**: #1A1A1A (near black for readability)
- **Secondary Text**: #4A4A4A (medium gray for supporting text)
- **Light Text on Dark**: #F8F6F3 (cream on navy backgrounds)

### Typography

**Headings:**
- **Font**: Playfair Display (elegant serif) - conveys dignity and timelessness
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)
- **Usage**: Main headlines, section titles

**Body Text:**
- **Font**: Inter (clean sans-serif) - modern, highly readable
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Usage**: Paragraphs, descriptions, UI elements

**Scale:**
- Hero headline: 2.5rem (mobile), 4rem (desktop)
- Section titles: 1.75rem (mobile), 2.5rem (desktop)
- Subsections: 1.25rem (mobile), 1.5rem (desktop)
- Body text: 1rem (16px base)
- Small text: 0.875rem (14px)

### Layout Principles

**Mobile-First Approach:**
- Single column layout with generous padding
- Full-width sections with contained content
- Smooth vertical scrolling experience
- Touch-friendly buttons (minimum 44px height)

**Section Structure:**
- Alternating background colors (cream/white/navy) for visual rhythm
- Diagonal dividers between sections for dynamic flow
- Ample whitespace for breathing room
- Asymmetric content placement for visual interest

**Visual Hierarchy:**
- Large, impactful headlines with ample spacing
- Supporting text in lighter weight and smaller size
- Key statistics highlighted in larger, bold numbers
- CTAs in contrasting gold color for visibility

### Interaction Design

**Animations:**
- Fade-in on scroll for section reveals
- Smooth transitions (300-400ms ease-in-out)
- Subtle hover effects on interactive elements
- No jarring or distracting motion

**Micro-interactions:**
- Button hover: slight scale (1.02) + shadow increase
- Card hover: gentle lift with shadow
- Link hover: underline with smooth transition
- Smooth scroll to sections

### Imagery Guidelines

**Style:**
- High-quality, professional photography
- Soft, natural lighting
- Muted, desaturated tones to match palette
- Respectful, dignified subject matter

**Content:**
- Hero: Elegant 3D printed mask with soft lighting
- Technology: Clean workspace with 3D printer, AI interface screenshots
- Process: Illustrated flow diagram with icons
- Market: Infographic charts with data visualization
- Impact: Peaceful memorial scenes, compassionate moments

**Treatment:**
- Subtle overlay gradients for text readability
- Rounded corners (8-12px) for modern feel
- Consistent aspect ratios across similar images
- Lazy loading for performance

### Spacing System

- **Base unit**: 4px
- **Micro**: 8px (2 units)
- **Small**: 16px (4 units)
- **Medium**: 24px (6 units)
- **Large**: 32px (8 units)
- **XL**: 48px (12 units)
- **XXL**: 64px (16 units)
- **Section padding**: 48px mobile, 80px desktop

### Component Styles

**Buttons:**
- Primary: Gold background, navy text, rounded corners
- Secondary: Navy outline, transparent background
- Minimum height: 44px (touch-friendly)
- Padding: 16px 32px
- Hover: Subtle shadow + slight scale

**Cards:**
- White background with subtle shadow
- 12px border radius
- 24px padding
- Hover: Lift effect with increased shadow

**Sections:**
- Full-width with max-width container (1200px)
- Alternating backgrounds for rhythm
- Diagonal top/bottom edges for dynamic flow
- 48px vertical padding (mobile), 80px (desktop)

### Emotional Tone

**Visual Communication:**
- **Respectful**: Muted colors, elegant typography, ample whitespace
- **Innovative**: Clean lines, modern components, tech imagery
- **Compassionate**: Warm accents, soft imagery, human-centered content
- **Professional**: Consistent design system, polished interactions, clear hierarchy

**Content Approach:**
- Balance technical details with emotional benefits
- Use statistics to build credibility
- Include human stories for connection
- Emphasize dignity and peace throughout

### Accessibility Considerations

- **Contrast ratios**: Minimum 4.5:1 for body text, 3:1 for large text
- **Touch targets**: Minimum 44x44px for interactive elements
- **Focus indicators**: Visible outline on keyboard focus
- **Alt text**: Descriptive text for all meaningful images
- **Semantic HTML**: Proper heading hierarchy, landmarks

### Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Image optimization**: WebP format, responsive sizes, lazy loading

---

## Implementation Notes

1. Use Tailwind CSS custom theme configuration for color palette
2. Import Google Fonts (Playfair Display + Inter) in index.html
3. Create reusable section components with consistent spacing
4. Implement intersection observer for scroll animations
5. Use CSS custom properties for theme colors in index.css
6. Ensure all images are high-resolution (2x for retina displays)
7. Test on various mobile devices (iPhone SE, standard phones, large phones)
8. Validate color contrast with accessibility tools
9. Optimize bundle size by code-splitting if needed
10. Add meta tags for social sharing with appropriate preview images
