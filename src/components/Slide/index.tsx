import { createRef } from "react";
import './../../pages/Homepage/styles.scss'

interface SlideProps {
  key: any;
  current: number;
  slide: any;
  handleSlideClick: any;
  bgColor: string;
}

const Slide = (props: SlideProps) => {

  const { slide, current, handleSlideClick, bgColor } = props;
  const slideEl = createRef<HTMLDivElement>();

  const handleMouseMove = (event: any) => {
    const el = slideEl.current
    if (el !== null) {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--x', `${event.clientX - (r.left + Math.floor(r.width / 2))}`)
      el.style.setProperty('--y', `${event.clientY - (r.top + Math.floor(r.height / 2))}`)
    }
  }
  
  const handleMouseLeave = () => {
    if (slideEl.current !== null) {
      slideEl.current.style.setProperty('--x', '0')
      slideEl.current.style.setProperty('--y', '0')
    }
  }
  
  const imageLoaded = (event: any) => {
    const target: HTMLImageElement = event.target
    target.style.opacity = '1'
  }
  
  const { src, headline, index } = slide
  let classNames = 'slide'
  
  if (current === index) classNames += ' slide--current'
  else if (current - 1 === index) classNames += ' slide--previous'
  else if (current + 1 === index) classNames += ' slide--next'
        
  return (
    <li 
      ref={slide}
      className={classNames} 
      onClick={() => handleSlideClick(slide.index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`slide__image-wrapper ${bgColor}`}>
        <img 
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>
      
      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
      </article>
    </li>
  )
}

export default Slide;