/** Gradiente líquido desfocado + grão. */
export function LiquidBackground() {
  return (
    <div className="liquid" aria-hidden="true">
      <span className="liquid__blob liquid__blob--a" />
      <span className="liquid__blob liquid__blob--b" />
      <span className="liquid__blob liquid__blob--c" />
      <span className="liquid__grain" />
    </div>
  )
}
