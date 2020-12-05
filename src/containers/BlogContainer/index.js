import React from 'react';
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
        return (
            <div className="blog-container">
                BLOG {slug}
            </div>
        )
    }
}

export default BlogContainer;