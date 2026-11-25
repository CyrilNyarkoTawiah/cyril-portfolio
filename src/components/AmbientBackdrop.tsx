/** Slow drifting glow orbs behind everything. Pure decoration — aria-hidden, no pointer events. */
const orbs = [
  { cls: 'bg-brand/[0.13]', style: { left: '-6%', top: '58%', width: '44rem', height: '44rem', '--dur': '38s', '--dx': '6vw' } },
  { cls: 'bg-[#3b5b94]/[0.16]', style: { left: '55%', top: '70%', width: '36rem', height: '36rem', '--dur': '30s', '--dx': '-5vw' } },
  { cls: 'bg-brand/[0.10]', style: { left: '26%', top: '86%', width: '30rem', height: '30rem', '--dur': '44s', '--dx': '9vw' } },
  { cls: 'bg-[#3b5b94]/[0.12]', style: { left: '78%', top: '12%', width: '26rem', height: '26rem', '--dur': '26s', '--dx': '-7vw' } },
  { cls: 'bg-brand/[0.08]', style: { left: '-10%', top: '-14%', width: '34rem', height: '34rem', '--dur': '36s', '--dx': '5vw' } },
  { cls: 'bg-[#4f8a3b]/[0.10]', style: { left: '40%', top: '-18%', width: '24rem', height: '24rem', '--dur': '41s', '--dx': '-4vw' } },
] as const

export default function AmbientBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {orbs.map((o, i) => (
        <span key={i} className={`ambient-orb ${o.cls}`} style={o.style as React.CSSProperties} />
      ))}
    </div>
  )
}
