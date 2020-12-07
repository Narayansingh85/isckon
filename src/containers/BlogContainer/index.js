import React from 'react';
import Header from '../../components/Header';
import BLOGS from '../../assets/data/blogs.json';
import './style.scss';
import Banner from '../../components/Banner';

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
                    <Banner
                        color={currentBlog.color}
                        image={currentBlog.image}
                        title={currentBlog.title}
                        subtitle={currentBlog.author}
                    />
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