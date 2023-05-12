import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
  return (
<footer className="bg-warning">
  <div className="container py-3 d-flex justify-content-between align-items-center">
    <div>
      <p>2023 Deniz Sarıkaş</p>
    </div>
    <div className="fs-2">
      <SocialMediaIcons />
    </div>
  </div>
</footer>
  )
}

export default Footer