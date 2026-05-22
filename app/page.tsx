'use client';

import { useMemo, useState } from 'react';

type Course = {
  id: number;
  title: string;
  category: string;
  level: string;
  hours: number;
  price: number;
  description: string;
  badge: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: 'DevOps desde cero',
    category: 'Tecnología',
    level: 'Inicial',
    hours: 24,
    price: 129,
    description: 'Aprende control de versiones, despliegue continuo y monitoreo básico para proyectos web.',
    badge: 'Más vendido'
  },
  {
    id: 2,
    title: 'Marketing Digital para Emprendedores',
    category: 'Negocios',
    level: 'Intermedio',
    hours: 18,
    price: 99,
    description: 'Diseña campañas, mide resultados y mejora la presencia digital de una marca.',
    badge: 'Nuevo'
  },
  {
    id: 3,
    title: 'Diseño UX/UI con prototipos',
    category: 'Diseño',
    level: 'Inicial',
    hours: 20,
    price: 115,
    description: 'Crea interfaces claras, prototipos navegables y experiencias centradas en el usuario.',
    badge: 'Recomendado'
  },
  {
    id: 4,
    title: 'Análisis de Datos con Excel y Power BI',
    category: 'Datos',
    level: 'Intermedio',
    hours: 28,
    price: 139,
    description: 'Transforma datos en reportes visuales para apoyar la toma de decisiones.',
    badge: 'Certificado'
  },
  {
    id: 5,
    title: 'Gestión Ágil con Scrum',
    category: 'Gestión',
    level: 'Inicial',
    hours: 16,
    price: 89,
    description: 'Organiza equipos ágiles mediante roles, eventos, artefactos y entregables incrementales.',
    badge: 'Popular'
  },
  {
    id: 6,
    title: 'Ciberseguridad para Usuarios',
    category: 'Tecnología',
    level: 'Inicial',
    hours: 14,
    price: 79,
    description: 'Reconoce riesgos digitales, protege tus cuentas y aplica buenas prácticas de seguridad.',
    badge: 'Esencial'
  }
];

const categories = ['Todos', ...Array.from(new Set(courses.map((course) => course.category)))];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState<Course[]>([]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
      const searchText = `${course.title} ${course.category} ${course.description}`.toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase().trim());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  const total = cart.reduce((sum, course) => sum + course.price, 0);

  function addToCart(course: Course) {
    setCart((current) => [...current, course]);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <main>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3 font-bold text-usil-blue">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-usil-blue text-usil-gold shadow-soft">U</span>
            <span className="text-lg">USIL Cursos Online</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#cursos" className="hover:text-usil-blue">Cursos</a>
            <a href="#beneficios" className="hover:text-usil-blue">Beneficios</a>
            <a href="#stack" className="hover:text-usil-blue">Stack DevOps</a>
          </div>
          <a href="#cursos" className="rounded-full bg-usil-gold px-5 py-2 text-sm font-bold text-usil-blue shadow-sm hover:opacity-90">
            Ver cursos
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-usil-blue via-[#113b78] to-[#061a35]">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-usil-gold blur-3xl" />
          <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 text-white md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-usil-gold ring-1 ring-white/20">
              Plataforma académica para potenciar tu perfil profesional
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Tienda online de cursos para estudiantes y profesionales USIL
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Explora cursos cortos, agrega programas a tu carrito y encuentra rutas de aprendizaje orientadas a tecnología, negocios, diseño, datos y gestión ágil.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cursos" className="rounded-full bg-usil-gold px-7 py-3 text-center font-bold text-usil-blue shadow-soft hover:opacity-90">
                Comprar cursos
              </a>
              <a href="#beneficios" className="rounded-full border border-white/30 px-7 py-3 text-center font-bold text-white hover:bg-white/10">
                Conocer beneficios
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-usil-blue">Resumen de compra</p>
            <h2 className="mt-2 text-3xl font-black">Carrito</h2>
            <div className="mt-5 space-y-3">
              {cart.length === 0 ? (
                <p className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">Aún no agregaste cursos. Selecciona uno para simular la compra.</p>
              ) : (
                cart.map((course, index) => (
                  <div key={`${course.id}-${index}`} className="flex items-center justify-between rounded-2xl bg-slate-100 p-4">
                    <div>
                      <p className="font-bold text-usil-blue">{course.title}</p>
                      <p className="text-sm text-slate-500">{course.hours} horas</p>
                    </div>
                    <p className="font-black">S/ {course.price}</p>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <div className="flex justify-between text-lg font-black">
                <span>Total</span>
                <span>S/ {total}</span>
              </div>
              <button
                type="button"
                onClick={clearCart}
                className="mt-4 w-full rounded-2xl bg-usil-blue px-5 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                disabled={cart.length === 0}
              >
                Limpiar carrito
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-usil-gold">Catálogo</p>
            <h2 className="mt-2 text-3xl font-black text-usil-blue md:text-4xl">Cursos disponibles</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Filtra por categoría o busca un curso según tu interés académico.</p>
          </div>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar curso..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none ring-usil-gold focus:ring-2 md:max-w-sm"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                selectedCategory === category
                  ? 'bg-usil-blue text-white shadow-soft'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-usil-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <article key={course.id} className="group rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-usil-sky px-3 py-1 text-xs font-black uppercase text-usil-blue">{course.badge}</span>
                <span className="text-sm font-bold text-slate-500">{course.level}</span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-usil-blue">{course.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-600">{course.description}</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                <div>
                  <p className="text-sm font-bold text-slate-500">{course.category} · {course.hours} horas</p>
                  <p className="text-2xl font-black text-usil-blue">S/ {course.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(course)}
                  className="rounded-2xl bg-usil-gold px-4 py-3 font-black text-usil-blue hover:opacity-90"
                >
                  Agregar
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficios" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Certificados digitales', 'Cada curso incluye constancia de finalización para fortalecer tu portafolio.'],
              ['Aprendizaje flexible', 'Contenido organizado en módulos cortos para estudiar desde cualquier lugar.'],
              ['Enfoque práctico', 'Actividades aplicadas a casos reales de tecnología, negocios y gestión.']
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] bg-slate-50 p-6 ring-1 ring-slate-200">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-usil-blue font-black text-usil-gold">✓</div>
                <h3 className="text-xl font-black text-usil-blue">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] bg-usil-blue p-8 text-white shadow-soft md:p-10">
          <p className="font-bold uppercase tracking-[0.2em] text-usil-gold">DevOps</p>
          <h2 className="mt-2 text-3xl font-black">Stack utilizado para el proyecto</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Frontend', 'Next.js, React, TypeScript y Tailwind CSS'],
              ['Control de versiones', 'Git y GitHub para repositorio del código'],
              ['CI/CD y hosting', 'Vercel para despliegue automático desde GitHub'],
              ['Calidad', 'ESLint, revisión visual y pruebas manuales del flujo de compra']
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
                <h3 className="font-black text-usil-gold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row">
          <p>© 2026 USIL Cursos Online. Proyecto académico.</p>
          <p>Landing desarrollada para despliegue en Vercel.</p>
        </div>
      </footer>
    </main>
  );
}
