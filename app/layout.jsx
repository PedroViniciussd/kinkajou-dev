// app/layout.jsx
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Kinkajou Dev | Desenvolvimento de Sites, Landing Pages, Lojas E-commerce, Sistemas com Código de Qualidade, Micro SaaS e Criação de Brand, Marca, Logo',
  description: 'Criamos sites personalizados, landing pages modernas, lojas online e sistemas otimizados com código limpo, responsivo e alto desempenho. Impulsione seu negócio digital com design único e tecnologia de ponta.',
  icons: {
    icon: '/favicon.png',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
   
      </body>
    </html>
  )
}
