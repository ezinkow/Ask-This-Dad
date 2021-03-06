import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import speechBubble from '../images/speechbubble.png'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState({})

    useEffect(() => {
        async function fetchTestimonials() {
            try {
                const response = await axios('api/testimonials')
                setTestimonials(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchTestimonials()
    }, [])

    useEffect(() => {
        console.log(testimonials)
    })

    return (
        <div className='row bubbles testimonialContainer'>
            {testimonials.length > 0 ? testimonials.map(testimonial =>
                <div className='col-3 bubbleContainer'>
                    <img src={speechBubble} alt="Speech Bubble" className="bubbleImgTest" />
                    <div className='testimonialText'>
                        <h4>"{testimonial.testimonial}"</h4>
                        <p className='testimonialName'>-{testimonial.name}</p>
                    </div>
                </div>
            ) : ""}
        </div>
    )
}