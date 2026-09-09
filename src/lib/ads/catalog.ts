import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "df-1",
    "title": "Lucide Icons",
    "tagline": "Beautiful & consistent open-source icon pack with 1,400+ vectors for modern web design",
    "link": "https://lucide.dev",
    "category": "Design & Media",
    "upvotes": 490,
    "tags": [
      "icons",
      "svg",
      "design"
    ],
    "techStack": [
      "SVG",
      "React",
      "Vue"
    ],
    "maker": {
      "name": "Lucide Team",
      "avatar": "https://placehold.co/64x64/09090b/fafafa?text=LC"
    }
  },
  {
    "id": "df-2",
    "title": "Spline 3D",
    "tagline": "Design and collaborate in 3D in the web browser with real-time physics and export to React",
    "link": "https://spline.design",
    "category": "Design & Media",
    "upvotes": 470,
    "tags": [
      "3d",
      "webgl",
      "design"
    ],
    "techStack": [
      "WebGL",
      "Three.js",
      "Rust"
    ],
    "maker": {
      "name": "Alejandro Kaed",
      "avatar": "https://placehold.co/64x64/2563eb/ffffff?text=SP"
    }
  },
  {
    "id": "df-3",
    "title": "Raycast",
    "tagline": "Supercharged extendable launcher designed with meticulous attention to UI detail and speed",
    "link": "https://raycast.com",
    "category": "Productivity",
    "upvotes": 420,
    "tags": [
      "macos",
      "productivity",
      "ui"
    ],
    "techStack": [
      "Swift",
      "React",
      "Node.js"
    ],
    "maker": {
      "name": "Thomas Paul Mann",
      "avatar": "https://placehold.co/64x64/ef4444/ffffff?text=RC"
    }
  },
  {
    "id": "df-4",
    "title": "Fontshare",
    "tagline": "Free quality fonts service launched by the Indian Type Foundry for commercial use",
    "link": "https://fontshare.com",
    "category": "Design & Media",
    "upvotes": 390,
    "tags": [
      "typography",
      "fonts",
      "design"
    ],
    "techStack": [
      "Woff2",
      "Variable Fonts"
    ],
    "maker": {
      "name": "Satya Rajpurohit",
      "avatar": "https://placehold.co/64x64/10b981/ffffff?text=FS"
    }
  },
  {
    "id": "df-5",
    "title": "Mobbin",
    "tagline": "World’s largest mobile and web design library with 300,000+ searchable UI patterns and flows",
    "link": "https://mobbin.com",
    "category": "Design & Media",
    "upvotes": 360,
    "tags": [
      "ui-patterns",
      "inspiration",
      "mobile"
    ],
    "techStack": [
      "React",
      "Next.js"
    ],
    "maker": {
      "name": "Mobbin Team",
      "avatar": "https://placehold.co/64x64/f59e0b/ffffff?text=MB"
    }
  },
  {
    "id": "df-6",
    "title": "Framer Motion",
    "tagline": "Production-ready declarative animation engine for React with gesture support and layout transitions",
    "link": "https://motion.dev",
    "category": "Developer Tools",
    "upvotes": 350,
    "tags": [
      "animation",
      "react",
      "physics"
    ],
    "techStack": [
      "TypeScript",
      "WAAPI"
    ],
    "maker": {
      "name": "Matt Perry",
      "avatar": "https://placehold.co/64x64/a78bfa/ffffff?text=FM"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "designforge",
  "name": "DesignForge",
  "domain": "designforge.com",
  "category": "design",
  "tags": [
    "design",
    "ui",
    "ux",
    "icons",
    "figma"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
