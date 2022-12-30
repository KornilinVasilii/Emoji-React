import s from './Cards.module.css'


export function Cards({ title, symbol, keywords }) { 
  
  return (
    <div className={ s.emoji_cards }>
      <p className={s.emoji__cards_img}>{symbol}</p>
      <p className={ s.emoji__cards_title }>{ title }</p>
      <p className={ s.emoji__cards_subtitle }>{ keywords }</p>
    </div>
  ) 
  
}