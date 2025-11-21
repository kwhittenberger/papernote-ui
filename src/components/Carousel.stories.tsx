import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Carousel, { CarouselItem } from './Carousel';

const meta = {
  title: 'Display/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Image/content carousel with auto-play, touch swipe, and keyboard navigation.

## Features
- **Auto-play**: Automatic slide progression with configurable interval
- **Touch swipe**: Mobile-friendly swipe gestures
- **Keyboard navigation**: Arrow keys for slide control
- **Navigation arrows**: Optional previous/next buttons
- **Dot indicators**: Visual slide position indicators
- **Infinite loop**: Optional continuous looping
- **Multi-item view**: Display multiple slides at once
- **Custom gap**: Configurable spacing between slides
- **Pause on hover**: Auto-play pauses when hovering

## Usage

\`\`\`tsx
import { Carousel, CarouselItem } from 'notebook-ui';

const slides: CarouselItem[] = [
  { id: '1', content: <img src="slide1.jpg" /> },
  { id: '2', content: <img src="slide2.jpg" /> },
  { id: '3', content: <img src="slide3.jpg" /> },
];

{/* Auto-play carousel */}
<Carousel
  items={slides}
  autoPlay={3000}
  loop={true}
/>

{/* Multi-item carousel */}
<Carousel
  items={products}
  itemsPerView={3}
  gap={24}
  showArrows={true}
  showDots={true}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of carousel items with id and content',
      table: {
        type: { summary: 'CarouselItem[]' },
      },
    },
    autoPlay: {
      control: 'number',
      description: 'Auto-play interval in milliseconds (0 to disable)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    showArrows: {
      control: 'boolean',
      description: 'Show navigation arrows',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showDots: {
      control: 'boolean',
      description: 'Show dot indicators',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    loop: {
      control: 'boolean',
      description: 'Enable infinite loop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onSlideChange: {
      description: 'Callback when slide changes',
      table: {
        type: { summary: '(index: number) => void' },
      },
    },
    itemsPerView: {
      control: 'number',
      description: 'Number of items to display simultaneously',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    gap: {
      control: 'number',
      description: 'Gap between items in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '16' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const createImageSlides = (): CarouselItem[] => [
  {
    id: '1',
    content: (
      <div style={{ height: '400px', backgroundColor: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem' }}>
        <span style={{ fontSize: '3rem', color: 'white', fontWeight: 600 }}>Slide 1</span>
      </div>
    ),
  },
  {
    id: '2',
    content: (
      <div style={{ height: '400px', backgroundColor: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem' }}>
        <span style={{ fontSize: '3rem', color: 'white', fontWeight: 600 }}>Slide 2</span>
      </div>
    ),
  },
  {
    id: '3',
    content: (
      <div style={{ height: '400px', backgroundColor: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem' }}>
        <span style={{ fontSize: '3rem', color: 'white', fontWeight: 600 }}>Slide 3</span>
      </div>
    ),
  },
  {
    id: '4',
    content: (
      <div style={{ height: '400px', backgroundColor: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem' }}>
        <span style={{ fontSize: '3rem', color: 'white', fontWeight: 600 }}>Slide 4</span>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: createImageSlides(),
  },
};

export const AutoPlay: Story = {
  args: {
    items: createImageSlides(),
    autoPlay: 3000,
  },
};

export const NoLoop: Story = {
  args: {
    items: createImageSlides(),
    loop: false,
  },
};

export const NoArrows: Story = {
  args: {
    items: createImageSlides(),
    showArrows: false,
  },
};

export const NoDots: Story = {
  args: {
    items: createImageSlides(),
    showDots: false,
  },
};

export const ThreeItemsPerView: Story = {
  render: () => {
    const items: CarouselItem[] = Array.from({ length: 9 }, (_, i) => ({
      id: String(i + 1),
      content: (
        <div style={{
          height: '200px',
          backgroundColor: `hsl(${i * 40}, 70%, 60%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.5rem',
          fontSize: '2rem',
          color: 'white',
          fontWeight: 600
        }}>
          {i + 1}
        </div>
      ),
    }));

    return <Carousel items={items} itemsPerView={3} gap={24} />;
  },
};

export const ProductCarousel: Story = {
  render: () => {
    const products: CarouselItem[] = [
      {
        id: '1',
        content: (
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e5e5' }}>
            <div style={{ height: '200px', backgroundColor: '#f5f5f4', borderRadius: '0.375rem', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Product Name</h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>Product description goes here</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6' }}>$99.99</span>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          </div>
        ),
      },
      {
        id: '2',
        content: (
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e5e5' }}>
            <div style={{ height: '200px', backgroundColor: '#f5f5f4', borderRadius: '0.375rem', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Another Product</h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>Different product description</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6' }}>$149.99</span>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          </div>
        ),
      },
      {
        id: '3',
        content: (
          <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e5e5' }}>
            <div style={{ height: '200px', backgroundColor: '#f5f5f4', borderRadius: '0.375rem', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Premium Product</h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>High-quality product details</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6' }}>$199.99</span>
              <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          </div>
        ),
      },
    ];

    return <Carousel items={products} autoPlay={5000} />;
  },
};

export const TestimonialCarousel: Story = {
  render: () => {
    const testimonials: CarouselItem[] = [
      {
        id: '1',
        content: (
          <div style={{ padding: '3rem 2rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#1e40af' }}>
              "This product has completely transformed how we work. Highly recommended!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>
                JD
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600 }}>John Doe</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>CEO, Company Inc.</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: '2',
        content: (
          <div style={{ padding: '3rem 2rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#166534' }}>
              "Excellent service and outstanding support. Five stars!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>
                JS
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600 }}>Jane Smith</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>CTO, Tech Corp</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: '3',
        content: (
          <div style={{ padding: '3rem 2rem', backgroundColor: '#fefce8', borderRadius: '0.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#854d0e' }}>
              "Best investment we've made this year. Results speak for themselves."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>
                BJ
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600 }}>Bob Johnson</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Founder, Startup XYZ</div>
              </div>
            </div>
          </div>
        ),
      },
    ];

    return <Carousel items={testimonials} autoPlay={4000} />;
  },
};

export const FeatureShowcase: Story = {
  render: () => {
    const features: CarouselItem[] = [
      {
        id: '1',
        content: (
          <div style={{ padding: '3rem 2rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e5e5' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '0.5rem', backgroundColor: '#3b82f6', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Fast Performance</h3>
            <p style={{ color: '#64748b', lineHeight: 1.6 }}>
              Lightning-fast load times and seamless user experience across all devices and platforms.
            </p>
          </div>
        ),
      },
      {
        id: '2',
        content: (
          <div style={{ padding: '3rem 2rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e5e5' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '0.5rem', backgroundColor: '#10b981', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Secure & Reliable</h3>
            <p style={{ color: '#64748b', lineHeight: 1.6 }}>
              Enterprise-grade security with 99.9% uptime guarantee. Your data is always protected.
            </p>
          </div>
        ),
      },
      {
        id: '3',
        content: (
          <div style={{ padding: '3rem 2rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e5e5e5' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '0.5rem', backgroundColor: '#f59e0b', marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>24/7 Support</h3>
            <p style={{ color: '#64748b', lineHeight: 1.6 }}>
              Round-the-clock customer support to help you whenever you need assistance.
            </p>
          </div>
        ),
      },
    ];

    return <Carousel items={features} autoPlay={6000} />;
  },
};

export const ImageGallery: Story = {
  render: () => {
    const images: CarouselItem[] = Array.from({ length: 8 }, (_, i) => ({
      id: String(i + 1),
      content: (
        <div style={{
          height: '300px',
          backgroundImage: `linear-gradient(135deg, hsl(${i * 45}, 70%, 50%), hsl(${i * 45 + 60}, 70%, 60%))`,
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: 'white',
          fontWeight: 600
        }}>
          Photo {i + 1}
        </div>
      ),
    }));

    return <Carousel items={images} itemsPerView={2} gap={16} autoPlay={3000} />;
  },
};

export const CardCarousel: Story = {
  render: () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards: CarouselItem[] = Array.from({ length: 6 }, (_, i) => ({
      id: String(i + 1),
      content: (
        <div style={{
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          border: '2px solid #e5e5e5',
          minHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{
            width: '100%',
            height: '120px',
            backgroundColor: '#f5f5f4',
            borderRadius: '0.375rem'
          }} />
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Card {i + 1}</h4>
          <p style={{ fontSize: '0.875rem', color: '#64748b', flex: 1 }}>
            This is card content with some descriptive text.
          </p>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 500
          }}>
            View Details
          </button>
        </div>
      ),
    }));

    return (
      <div>
        <Carousel
          items={cards}
          itemsPerView={3}
          gap={24}
          onSlideChange={setCurrentSlide}
        />
        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
          Viewing slide {currentSlide + 1} of {Math.ceil(cards.length / 3)}
        </div>
      </div>
    );
  },
};

export const BannerCarousel: Story = {
  render: () => {
    const banners: CarouselItem[] = [
      {
        id: '1',
        content: (
          <div style={{
            height: '300px',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Summer Sale</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Up to 50% off selected items</p>
            <button style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'white',
              color: '#667eea',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600
            }}>
              Shop Now
            </button>
          </div>
        ),
      },
      {
        id: '2',
        content: (
          <div style={{
            height: '300px',
            backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>New Arrivals</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Check out our latest collection</p>
            <button style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'white',
              color: '#f5576c',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600
            }}>
              View Collection
            </button>
          </div>
        ),
      },
      {
        id: '3',
        content: (
          <div style={{
            height: '300px',
            backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            borderRadius: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Free Shipping</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>On orders over $50</p>
            <button style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'white',
              color: '#4facfe',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600
            }}>
              Learn More
            </button>
          </div>
        ),
      },
    ];

    return <Carousel items={banners} autoPlay={5000} />;
  },
};
