export function scrollToTarget(targetId: string) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth"

    if (targetId === "top" || targetId === "home") {
        window.scrollTo({ top: 0, behavior })
        return
    }

    const element = document.getElementById(targetId)
    if (element) {
        element.scrollIntoView({ behavior, block: "start" })
    }
}
