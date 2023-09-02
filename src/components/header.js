import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div><Link href="/" legacyBehavior><a><img src="/header.svg" alt="header-img" /></a></Link></div>
            <nav>
                <ul>
                    <li><Link href="/user/register" legacyBehavior><a>登録</a></Link></li>
                    <li><Link href="/user/login" legacyBehavior><a>ログイン</a></Link></li>
                    <li><Link href="/item/create" legacyBehavior><a>アイテム作成</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
