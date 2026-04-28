'use client'

import { usePathname, useRouter } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Feed',        path: '/' },
  { label: '+ Publicar', path: '/post/novo' },
  { label: 'Perfil',     path: '/perfil' },
]

/**
 * Header — barra de navegação global.
 *
 * Usa apenas elementos HTML nativos com estilos inline para evitar
 * o bug de CSS-in-JS do Ant Design ao retornar de páginas inexistentes
 * com o botão "voltar" do navegador.
 */
export function Header() {
  const pathname = usePathname()
  const router   = useRouter()

  return (
    <header style={styles.wrapper}>
      <div style={styles.inner}>

        {/* Logo */}
        <button
          style={styles.logo}
          onClick={() => router.push('/')}
          aria-label="Ir para o Feed"
        >
          💬 <span style={styles.logoHighlight}>Chat</span> da Turma
        </button>

        {/* Links de navegação */}
        <nav style={styles.nav} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                style={isActive ? styles.btnActive : styles.btnNormal}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

      </div>
    </header>
  )
}

/* ─── Estilos inline estáticos (sem CSS-in-JS) ──────────── */
const styles = {
  wrapper: {
    position:     'sticky',
    top:          0,
    zIndex:       100,
    background:   '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    boxShadow:    '0 1px 4px rgba(0,0,0,0.06)',
  },
  inner: {
    maxWidth:       720,
    margin:         '0 auto',
    padding:        '0 24px',
    height:         60,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    gap:            16,
  },
  logo: {
    background:  'none',
    border:      'none',
    cursor:      'pointer',
    fontFamily:  'inherit',
    fontSize:    17,
    fontWeight:  700,
    color:       '#111827',
    letterSpacing: '-0.3px',
    flexShrink:  0,
    padding:     0,
  },
  logoHighlight: {
    color: '#0ea5e9',
  },
  nav: {
    display:    'flex',
    alignItems: 'center',
    gap:        4,
  },
  btnNormal: {
    background:  'none',
    border:      'none',
    cursor:      'pointer',
    fontFamily:  'inherit',
    fontSize:    14,
    fontWeight:  500,
    color:       '#374151',
    padding:     '6px 14px',
    borderRadius: 8,
    transition:  'background 0.15s',
  },
  btnActive: {
    background:  '#0ea5e9',
    border:      'none',
    cursor:      'pointer',
    fontFamily:  'inherit',
    fontSize:    14,
    fontWeight:  600,
    color:       '#ffffff',
    padding:     '6px 14px',
    borderRadius: 8,
  },
}
