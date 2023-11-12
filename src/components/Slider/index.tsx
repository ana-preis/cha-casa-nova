import { useState } from "react"
import './../../pages/Homepage/styles.scss'
import Slide from "../Slide"
import { SlideType } from "../../types/SliderTypes";

interface SliderControlProps {
  type: string;
  title: string;
  handleClick: any;
}

const SliderControl = (props: SliderControlProps) => {
  const { type, title, handleClick } = props;
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}

interface SliderProps {
  heading: string;
  slides: SlideType[];
  specStyles?: string;
  bgColor?: string;
}

const Slider = (props: SliderProps) => {
  const [state, setState] = useState({ current: 0 })
  const { heading, slides, specStyles, bgColor } = props
    
  const handlePreviousClick = ()  => {
    const previous = state.current - 1
    setState({...state, current: (previous < 0) ? slides.length - 1 : previous})
  }
  
  const handleNextClick = () => {
    const next = state.current + 1;
    
    setState({ ...state, 
      current: (next === slides.length) 
        ? 0
        : next
    })
  }
  
  const handleSlideClick = (index: number) => {
    if (state.current !== index) {
      setState({ ...state,
        current: index
      })
    }
  }

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
  const wrapperTransform = {
    'transform': `translateX(-${state.current * (100 / slides.length)}%)`
  }

  return (
    <div className={`slider ${specStyles}`} aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">{heading}</h3>
        
        {slides.map(slide => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              current={state.current}
              handleSlideClick={handleSlideClick}
              bgColor={bgColor ?? ""}
            />
          )
        })}
      </ul>
      
      <div className="slider__controls">
        <SliderControl 
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        
        <SliderControl 
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  )
}

export default Slider;