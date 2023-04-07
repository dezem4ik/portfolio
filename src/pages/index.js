import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import autoprefixer from 'autoprefixer'

function IndexPage() {
  return (
    <div>
      <div className='container'>
        <header className='innerContainer header'>
          <a href="mailto:denya_mc43@mail.ru" className='headerEmail'>
            <Image 
              src="/img/email.png"
              width={24}
              height={24}
            />
            <span>denya_mc43@mail.ru</span>
          </a>
          <div>
            <a href="https://vk.com/id22029785" className=''>
              Vkontakte
            </a>
            <span className='divider'>
               / 
            </span>
            <a href="https://instagram.com/denyamc?igshid=YmMyMTA2M2Y=" className=''>
              Instagram
            </a>
          </div>
        </header>
        <main>
          <div 
            style={{
              margin: '0 auto',
              backgroundImage: `url(/img/deniss.jpg)`,
              width: 170,
              height: 170,
              backgroundSize: 'cover'
            }} 
            className='avatar'
          >
          </div>
          <div className='Opisaniepodfoto'>
            <h3 className='Denisname'>Denis Zemlianskii</h3>
            <h1 className='Opisanie'>HTML CSS <br/> React Javascript <br/> Developer </h1>
          </div>
        </main>
        <div className='middleContainer'>
          <h2 className='Osebe'>
            Я совсем недавно пришёл к тому, что хочу начать деятельность связанную с программированием, и тем, что связано с этим. 
            На самом деле, очень давно интересуюсь. 
            Были попытки самостоятельного изучения, 
            но все это было крайне хаотично и не результативно. Бесконечно обожаю цифры, компьютер, расчеты  и т.д.
            В детстве была мечта стать финансистом. 
            Но мечтам свойственно несколько меняться, и в реальности очень хочу реализовать себя окончательно
            в IT сфере. 
          </h2>
        </div>
        <div className='podvalOpisanie'>
            <h2>
              Collaborate with me <br/> to create impactful results.
            </h2>
        </div>
        <div className='podval'>
            <div>
              <Image
              className='imgs'
              src="/img/red.png"
              width={24}
              height={24}
              />
              <span className='zagolovok'>UX  and UI</span>
              <p className= 'opisaniezagolovok'>
                Designing interfaces that are <br/>
                intuitive, efficient, and <br/>
                enojoyable to use.
              </p>
            </div>
            <div>
              <Image 
              className='imgs'
              src="/img/phone.png"
              width={24}
              height={24}
              />
              <span className='zagolovok'>Web and Mobile App</span>
              <p className= 'opisaniezagolovok'>
              Transforming ideas into <br/>
              exceptional web and mobile <br/>
              app experiences.
              </p>
            </div>
            <div>
              <Image
              className='imgs'
              src="/img/comp.png"
              width={24}
              height={24}
              />
              <span className='zagolovok'>Design and Creative</span>
              <p className= 'opisaniezagolovok'>
              Crafting visually stunning <br/>
              designs that connect with <br/>
              your audience.
              </p>
            </div>
            <div>
              <Image
              className='imgs'
              src="/img/star.png"
              width={24}
              height={24}
              />
              <span className='zagolovok'>Development</span>
              <p className= 'opisaniezagolovok'>
              Bringing your vision to life <br/>
              with the latest technology <br/>
              and design trends.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage


