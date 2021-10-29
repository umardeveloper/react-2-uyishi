function Icon({ width = 100, height = 100, color = 'red' }) {
	return (
		<svg
			width={width}
			height={height}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='m44.626 12.346 88.508 51.1c3.399 1.962 5.935 3.426 7.851 4.752 1.914 1.323 3.19 2.496 4.081 3.867a13.753 13.753 0 0 1 2.199 8.208c-.086 1.632-.605 3.287-1.6 5.39-.997 2.105-2.461 4.642-4.423 8.04l-2.6 4.504c-1.963 3.398-3.427 5.934-4.752 7.85-1.324 1.914-2.497 3.191-3.867 4.081a13.755 13.755 0 0 1-8.209 2.199c-1.632-.085-3.286-.605-5.389-1.6-2.106-.997-4.642-2.461-8.041-4.423l-88.508-51.1c-3.398-1.962-5.934-3.427-7.85-4.752-1.914-1.324-3.19-2.496-4.08-3.867a13.75 13.75 0 0 1-2.2-8.209c.085-1.632.605-3.286 1.6-5.389.997-2.106 2.46-4.642 4.423-8.04l2.6-4.504c1.962-3.398 3.427-5.934 4.752-7.85 1.324-1.914 2.496-3.191 3.867-4.081a13.75 13.75 0 0 1 8.208-2.2c1.633.086 3.287.605 5.39 1.6 2.106.997 4.642 2.462 8.04 4.424Z'
				fill={color}
				fillOpacity='.08'
			/>
			<g clipPath='url(#a)' fill='#007AFF'>
				<path d='M36.095 43.272c2.394 1.382 4.965.979 6.422-.98L40.69 41.24c-.924 1.019-2.351 1.182-3.666.423-1.769-1.021-2.018-3.13-.652-5.495 1.36-2.358 3.312-3.197 5.073-2.18 1.308.756 1.838 2.145 1.375 3.545l1.826 1.054c1.025-2.273.086-4.848-2.271-6.209-2.94-1.697-5.959-.67-7.905 2.702-1.939 3.357-1.316 6.496 1.624 8.193Zm9.366 5.274c2.35 1.357 4.67.644 6.143-1.908 1.465-2.537.916-4.906-1.428-6.259-2.336-1.349-4.674-.637-6.135 1.893-1.473 2.552-.938 4.912 1.42 6.274Zm.843-1.46c-1.244-.718-1.4-2.092-.44-3.752.958-1.661 2.226-2.214 3.47-1.495 1.236.713 1.391 2.088.433 3.748-.959 1.66-2.22 2.217-3.463 1.5Zm4.474 4.318 1.782 1.03 2.644-4.58c.68-1.179 1.777-1.533 2.84-.919 1.086.627 1.237 1.528.531 2.75l-2.694 4.666 1.783 1.03 2.935-5.083c1.079-1.87.733-3.478-1.021-4.49-1.172-.677-2.27-.602-3.15.06l-.122-.071.726-1.258-1.718-.992-4.536 7.857ZM65.64 46.94 64.5 48.917l-1.244-.718-.801 1.388 1.244.718-2.503 4.335c-.876 1.516-.505 2.535 1.299 3.577.345.2.692.361.98.46l.789-1.365c-.228-.103-.373-.168-.625-.313-.748-.432-.875-.975-.422-1.758l2.257-3.911 1.682.971.801-1.387-1.682-.971 1.142-1.977-1.776-1.026Zm5.44 3.956c.59.34 1.341.151 1.681-.438a1.231 1.231 0 0 0-.46-1.675 1.23 1.23 0 0 0-1.675.442c-.34.59-.128 1.335.454 1.671Zm-6.18 8.662 1.776 1.026 4.536-7.858-1.775-1.025-4.537 7.857Zm3.636 2.1 1.783 1.03 2.644-4.58c.68-1.179 1.777-1.533 2.84-.92 1.086.628 1.237 1.53.531 2.751l-2.694 4.666 1.783 1.029 2.935-5.083c1.079-1.869.733-3.477-1.021-4.49-1.172-.676-2.27-.601-3.15.06l-.122-.07.726-1.258-1.718-.992-4.537 7.857Zm20.027 1.086-1.782-1.03-2.644 4.58c-.685 1.186-1.733 1.54-2.89.872-1.064-.615-1.22-1.49-.514-2.713l2.698-4.672-1.783-1.03-2.947 5.104c-1.062 1.84-.674 3.493 1.044 4.485 1.2.693 2.264.627 3.164-.052l.122.07-.722 1.251 1.718.992 4.536-7.857Zm3.663 9.725c-.6.44-1.401.418-2.286-.093-1.172-.676-1.445-1.946-.72-3.3l.054-.094 5.492 3.17.328-.567c1.423-2.466.938-4.73-1.305-6.025-2.278-1.316-4.612-.545-6.069 1.979-1.452 2.516-.946 4.86 1.369 6.196 1.855 1.07 3.685.939 4.826-.29l-1.69-.976Zm.755-5.526c1.071.619 1.34 1.78.687 2.994L89.967 67.8c.76-1.133 1.951-1.471 3.015-.857ZM116.515 82.437a.75.75 0 0 0 .062-.606l-2.022-7.503c-.067-.25-.185-.394-.357-.494a.701.701 0 0 0-.983.257.74.74 0 0 0-.089.553l.664 2.568 1.141 3.602-1.67-1.108-9.093-5.25c-.374-.216-.787-.1-1.002.274-.216.374-.111.79.263 1.005l9.093 5.25 1.802.897-3.696.808-2.557.71c-.177.04-.334.18-.434.353a.7.7 0 0 0 .269.98c.172.099.36.121.583.068l7.532-2.007a.752.752 0 0 0 .494-.357Z' />
			</g>
			<path
				d='m44.626 12.346 88.508 51.1c3.399 1.962 5.935 3.426 7.851 4.752 1.914 1.323 3.19 2.496 4.081 3.867a13.753 13.753 0 0 1 2.199 8.208c-.086 1.632-.605 3.287-1.6 5.39-.997 2.105-2.461 4.642-4.423 8.04l-2.6 4.504c-1.963 3.398-3.427 5.934-4.752 7.85-1.324 1.914-2.497 3.191-3.867 4.081a13.755 13.755 0 0 1-8.209 2.199c-1.632-.085-3.286-.605-5.389-1.6-2.106-.997-4.642-2.461-8.041-4.423l-88.508-51.1c-3.398-1.962-5.934-3.427-7.85-4.752-1.914-1.324-3.19-2.496-4.08-3.867a13.75 13.75 0 0 1-2.2-8.209c.085-1.632.605-3.286 1.6-5.389.997-2.106 2.46-4.642 4.423-8.04l2.6-4.504c1.962-3.398 3.427-5.934 4.752-7.85 1.324-1.914 2.496-3.191 3.867-4.081a13.75 13.75 0 0 1 8.208-2.2c1.633.086 3.287.605 5.39 1.6 2.106.997 4.642 2.462 8.04 4.424Z'
				stroke='#E5E5EA'
				strokeWidth='.5'
			/>
			<defs>
				<clipPath id='a'>
					<path
						fill='#fff'
						transform='rotate(30 -27.182 85.558)'
						d='M0 0h99v22H0z'
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export default Icon;
