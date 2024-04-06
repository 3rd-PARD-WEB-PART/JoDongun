import { Link, NavLink, Outlet } from 'react-router-dom';

function Articles() {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    }
    return (
        <div>
            <Outlet/> 
            <ul>
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>
            {/* 자식 컴포넌트를 보여주는 얘 */}
            {/* <ul>
                <li>
                    <NavLink
                        to="/articles/1"
                        style={({isActive}) => (
                            isActive ?
                                activeStyle
                                : undefined
                        )}>게시글 1</NavLink>
                </li>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul> */}
        </div>
    )
}

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };
    const defaultStyle = {
        color: 'black',
        fontSize: 15,
    }
    return(
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({isActive}) => (isActive ? activeStyle : defaultStyle)}>
                    게시글{id}
                </NavLink>
        </li>
    )
}

// const MyNavLink = styled(NavLink)`
// 스타일 작성 -> 나중에 이게 undefined로 된다.3
// `

export default Articles;