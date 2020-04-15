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
			</div>
		</footer>
	)
}

export default Footer
