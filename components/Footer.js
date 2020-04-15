import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	return (
		<footer>
			<div className='wrapper grid mb-120'>
				<div className='footer-arrows mt-64'>
					<img
						src='/img/intro-section-uparrow.svg'
						className='footer-down-arrow'
						height='36'
						width='48'
					/>
					<img
						src='/img/intro-section-uparrow.svg'
						className='footer-down-arrow'
						height='36'
						width='48'
					/>
					<img
						src='/img/intro-section-uparrow.svg'
						className='footer-down-arrow'
						height='36'
						width='48'
					/>
				</div>
				<hr />
				<a href='mailto:hello@erhidalgo.com' className='secondary-btn'>
					email me
				</a>
				<a href='mailto:hello@erhidalgo.com' className='secondary-btn'>
					View my Resume
				</a>
				<img
					src='/img/intro-section-uparrow.svg'
					className='to-top-btn'
					onClick={scrollToTop}
				/>
				<div className='footer-right-socials'>
					<a href='https://github.com/rbhidalgo' target='_blank'>
						<img src='/socials/bxl-github.svg' />
					</a>
					<a href='https://www.linkedin.com/in/rhidalgob/' target='_blank'>
						<img src='/socials/bxl-linkedin-square.svg' />
					</a>
					<a href='https://dribbble.com/rhidalgob' target='_blank'>
						<img src='/socials/bxl-dribbble.svg' />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
