import styles from '@/styles/Headers.module.css'
import Link from 'next/link'

export function Header(){
return(
    <header className={styles.Container}>
           <Link href='/'><h1 className={styles.mob}>Link<span>Snip</span></h1></Link> 
        <div className={styles.ContainerFlex}>
           <Link href='/'><h1>Link<span>Snip</span></h1></Link> 
           <div  className={styles.ContainerFlex}>
           <Link href='/'><h1>Home</h1></Link>   
           <Link href='/sobre'><h1>Sobre</h1></Link> 
           <Link href='/recursos'><h1>Recursos</h1></Link> 
          
           </div>
      </div>
    </header>
)

}