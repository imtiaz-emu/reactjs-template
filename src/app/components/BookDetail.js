import React from 'react';
import {LoadBooks} from '../utils/LoadBooks';

export class BookDetail extends React.Component {
    constructor(props) {
        super();
         this.state = {book: {}};
    }

    componentDidMount(){
        this.getBookById(this.props.match.params.id);
    }

    getBookById(id) {
        var new_state_book = this.state.book;
        var books = LoadBooks();
        new_state_book = books.filter(function (book) {
            if (book.id === id) {
                return book;
            }
        });
        this.setState({book: new_state_book[0]});
        console.log(this.state);
    }

    render() {
        return (
            <div className="row book-detail-page">
                <div className="col-md-8 col-sm-7 blog-posts">
                    {/*<!-- Single Post -->*/}
                    <div className="single-post">
                        <div className="post-thumbnail row">
                            <div className="col-md-6">
                                <img src={this.state.book.image} alt=""/>
                            </div>
                            <div className="col-md-6">
                                <h2>03</h2>
                                <h3>Nov 2017</h3>
                            </div>
                        </div>
                        <div className="post-content">
                            <h2 className="post-title">{this.state.book.name}</h2>
                            <div className="post-meta">
                                <a href="">Loredana Papp</a>
                                <a href="">Design, Inspiration</a>
                                <a href="">2 Comments</a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec
                                elementum id, suscipit id nulla. Phasellus vestibulum, quam tincidunt venenatis
                                ultrices, est libero mattis ante, ac consectetur diam neque eget quam. Etiam feugiat
                                augue et varius blandit. Praesent mattis, eros a sodales commodo.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam
                                tincidunt venenatis ultrices, est libero mattis ante, ac consectetur diam neque eget
                                quam. Etiam feugiat augue et varius blandit. Praesent mattis, eros a sodales commodo,
                                justo ipsum rutrum mauris, sit amet egestas metus quam sed dolor. Sed consectetur, dui
                                sed sollicitudin eleifend, arcu neque egestas lectus, sagittis viverra justo massa ut
                                sapien. Aenean viverra ornare mauris eget lobortis. Cras vulputate elementum magna,
                                tincidunt pharetra erat condimentum sit amet. Maecenas vitae ligula pretium, convallis
                                magna eu, ultricies quam. In hac habitasse platea dictumst. </p>
                            <p>Fusce vel tempus nunc. Phasellus et risus eget sapien suscipit efficitur. Suspendisse
                                iaculis purus ornare urna egestas imperdiet. Nulla congue consectetur placerat. Integer
                                sit amet auctor justo. Pellentesque vel congue velit. Sed ullamcorper lacus scelerisque
                                condimentum convallis. Sed ac mollis sem. </p>
                        </div>

                        {/*<!-- Post Comments -->*/}
                        <div className="comments">
                            <h2>Comments (2)</h2>
                            <ul className="comment-list">
                                <li>
                                    <div className="avatar">
                                        <img src="img/avatar/01.jpg" alt=""/>
                                    </div>
                                    <div className="commetn-text">
                                        <h3>Michael Smith | 03 nov, 2017 | Reply</h3>
                                        <p>Vivamus in urna eu enim porttitor consequat. Proin vitae pulvinar libero.
                                            Proin ut hendrerit metus. Aliquam erat volutpat. Donec fermen tum convallis
                                            ante eget tristique. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <img src="img/avatar/02.jpg" alt=""/>
                                    </div>
                                    <div className="commetn-text">
                                        <h3>Michael Smith | 03 nov, 2017 | Reply</h3>
                                        <p>Vivamus in urna eu enim porttitor consequat. Proin vitae pulvinar libero.
                                            Proin ut hendrerit metus. Aliquam erat volutpat. Donec fermen tum convallis
                                            ante eget tristique. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*<!-- Commert Form -->*/}
                        <div className="row">
                            <div className="col-md-9 comment-from">
                                <h2>Leave a comment</h2>
                                <form className="form-class">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" name="name" placeholder="Your name"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" name="email" placeholder="Your email"/>
                                        </div>
                                        <div className="col-sm-12">
                                            <input type="text" name="subject" placeholder="Subject"/>
                                            <textarea name="message" placeholder="Message"></textarea>
                                            <button className="site-btn">send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Sidebar area -->*/}
                <div className="col-md-4 col-sm-5 sidebar">
                    {/*<!-- Single widget -->*/}
                    <div className="widget-item">
                        <h2 className="widget-title">Categories</h2>
                        <ul>
                            <li><a href="#">Vestibulum maximus</a></li>
                            <li><a href="#">Nisi eu lobortis pharetra</a></li>
                            <li><a href="#">Orci quam accumsan </a></li>
                            <li><a href="#">Auguen pharetra massa</a></li>
                            <li><a href="#">Tellus ut nulla</a></li>
                            <li><a href="#">Etiam egestas viverra </a></li>
                        </ul>
                    </div>
                    {/*<!-- Single widget -->*/}
                    <div className="widget-item">
                        <h2 className="widget-title">Instagram</h2>
                        <ul className="instagram">
                            <li><img src="img/instagram/1.jpg" alt=""/></li>
                            <li><img src="img/instagram/2.jpg" alt=""/></li>
                            <li><img src="img/instagram/3.jpg" alt=""/></li>
                            <li><img src="img/instagram/4.jpg" alt=""/></li>
                            <li><img src="img/instagram/5.jpg" alt=""/></li>
                            <li><img src="img/instagram/6.jpg" alt=""/></li>
                        </ul>
                    </div>
                    {/*<!-- Single widget -->*/}
                    <div className="widget-item">
                        <h2 className="widget-title">Tags</h2>
                        <ul className="tag">
                            <li><a href="">branding</a></li>
                            <li><a href="">identity</a></li>
                            <li><a href="">video</a></li>
                            <li><a href="">design</a></li>
                            <li><a href="">inspiration</a></li>
                            <li><a href="">web design</a></li>
                            <li><a href="">photography</a></li>
                        </ul>
                    </div>
                    {/*<!-- Single widget -->*/}
                    <div className="widget-item">
                        <h2 className="widget-title">Quote</h2>
                        <div className="quote">
                            <span className="quotation">‘​‌‘​‌</span>
                            <p>Vivamus in urna eu enim porttitor consequat. Proin vitae pulvinar libero. Proin ut
                                hendrerit metus. Aliquam erat volutpat. Donec fermen tum convallis ante eget tristique.
                                Sed lacinia turpis at ultricies vestibulum.</p>
                        </div>
                    </div>
                    {/*<!-- Single widget -->*/}
                    <div className="widget-item">
                        <h2 className="widget-title">Add</h2>
                        <div className="add">
                            <a href=""><img src="img/add.jpg" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}