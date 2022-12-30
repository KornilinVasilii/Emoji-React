import s from './Header.module.css'
export function Header() { 

  return (
    
      <header className={ s.header }>
        <h1 className={ s.title }>Emoji Finder</h1>
        <p className={ s.sub_title}>Find emoji by keywords</p>
      </header>
    
  )
}