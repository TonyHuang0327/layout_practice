import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
    <Link to="/login">登入頁面</Link>
    <Link to="/hero">Hero頁面</Link>
    <Link to="/card-product">卡片商品頁面</Link>
    </>
  )
}
