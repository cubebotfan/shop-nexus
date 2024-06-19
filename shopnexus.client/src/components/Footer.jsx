import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='container flexbox'>
            <section className='footer-options-list'>
                <div>
                    <h2>Store</h2>
                    <ul>
                        <li>Categories</li>
                        <li>Offers</li>
                        <li>Members Subscriptions</li>
                    </ul>
                </div>
                <div>
                    <h2>Customer</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Q&A</li>
                    </ul>
                </div>
                <div>
                    <h2>Jobs</h2>
                    <ul>
                        <li>Work with Us</li>
                        <li>Careers</li>
                        <li>Internships</li>
                    </ul>
                </div>
            </section>
            <section className='footer-contactus'>
                <h2>Receive the best offers</h2>
                <p>Be the first one to get to most incredible offers</p>
                <div className='subscription-section'>
                    <input
                        type='text'
                        placeholder='Email Address'
                    />
                    <button>Submit</button>
                </div>
            </section>
        </div>
    </footer>
  )
}

export default Footer