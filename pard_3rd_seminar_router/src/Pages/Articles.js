import { Link, NavLink, Outlet } from 'react-router-dom';

function Articles() {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    }
    return (
        <div>
            <Outlet/> 
            {/* 자식 컴포넌트를 보여주는 얘 */}
            <ul>
                <li>
                    <NavLink
                        to="/articles/1"
                        style={({isActive}) => (
                            isActive ?
                                activeStyle
                                : undefined
                        )}>게시글 1</NavLink>
                </li>
                {/* <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li> */}
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Articles;