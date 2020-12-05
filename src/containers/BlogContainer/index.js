import React from 'react';
import Header from '../../components/Header';
import BLOGS from '../../assets/data/blogs.json';
import './style.scss';

class BlogContainer extends React.Component {
    render() {
        const {
            match: {
                params: {
                    slug,
                }
            }
        } = this.props;
        const currentBlog = BLOGS.find(blog => blog.slug === slug) || BLOGS.find(blog => blog.slug === 'lost');
        return (
            <React.Fragment>
                <Header
                    bgColor={currentBlog.color}
                    navLinks={[
                        { label: 'Let\'s talk Practical', path: '#practical' }
                    ]} />
                <div className="blog-container">
                    <div className="banner" style={{
                        background: `linear-gradient(0deg, ${currentBlog.color}aa 70%, ${currentBlog.color}aa 70%), url(${currentBlog.image}) center center/cover no-repeat`
                    }}>
                        <div className="text">
                            <div className="title">{currentBlog.title}</div>
                            <div className="author">{currentBlog.author}</div>
                        </div>
                    </div>
                    <div className="blog">
                        {currentBlog.article.map(para => (
                            <p className="para">{para}</p>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BlogContainer;