import { useEffect } from "react";

export default function useEventListener(eventName, handler, element = window) {
	useEffect(
		() => {
			// Make sure element supports addEventListener
			const isSupported = element && element.addEventListener;
			if (!isSupported) return;

			// Add event listener
			element.addEventListener(eventName, handler, { passive: true });

			// Remove event listener on cleanup
			return () => {
				element.removeEventListener(eventName, handler);
			};
		},
		[eventName, element, handler] // Re-run if eventName or element changes
	);
}