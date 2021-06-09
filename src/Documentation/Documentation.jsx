import React from 'react'
import Navbar from './Navbar'
import Frame from 'react-frame-component';
import './Documentation.css'
import Footer from '../Dashboard/Footer'
export default function Documentation() {
    return (
        <div className="body" style={{padding:'0',margin:'0'}}>
             <div className="header"><Navbar style={{padding:'0',margin:'0'}}/>
            <div style={{height:'65px',display:'block'}}></div>
            </div>
            <div className="docs">
            <div className="intro">
                 <p >So let's come straight to the point, you are here to connect your static page form to a backend. We use the trick of using the GET to make a POST (Wow!)
                    <br/>
                 But let's start from the beginning.</p>
            </div>
            <div className="main">
                <section className="main-section">
                    <h2>Creating a Project</h2>

                    <p>
                        Every integration begins with what we very creatively (sarcasm of course) named 'Project'. When you create a project, do keep the following in mind:
                        <ul>
                            <li>Name your project aptly - We have no constraint of having a unique name. We identify by an ID, as you shall see shortly</li>
                            <li>Give a brief description for your reference</li>
                            <li>Now this is VERY IMPORTANT: While adding the Endpoint URL, make sure to add the Protocol as well i.e. `http://` or `https://` Otherwise, the connection would not work</li>
                            <li>For the fields, we allow a minimum of 1 and maximum of 5 for a particular project. Leave the other fields blank if you don't want to assign them. You can of course, change this later</li>
                        </ul>                   
                    </p>
                </section>
                <section className="main-section">
                    <h2>Setting up the Form in Static Site</h2>
                    <p>
                        There's some pre-requisites to using Beyond Static to your form, you must have jQuery CDN in your project. 
                        <br />
                        If you're confused, you may add it from <a target="_blank" href="https://code.jquery.com">here</a>.
                        <br />
                        Now, we encrypt the incoming input using our code below:
                    </p>
                    <div className="code-section">
                        <Frame style={{width: '100%', height: '400px'}}  initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/rising-entropy/bea6a3b35e63e29280dedbe2c5dc15a9.js'></script></body></html>" />
                    </div>
                    <p className="info-piece">
                         These functions are to be integrated with the form. A good reference example would be the implementation 
                         <a target="_blank" href="https://github.com/Aayush-Choudhary/Aayush-Choudhary.github.io"> Aayush's Portfolio</a>
                         . More specifically, in the <a target="_blank" href="https://github.com/Aayush-Choudhary/Aayush-Choudhary.github.io/blob/main/js/integrateBack.js">integrateBack.js</a> file:
                    </p>
                    <div className="code-section">
                        <Frame style={{width: '100%', height: '400px'}}  initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/rising-entropy/6c28b2879554187aac647431a4f05625.js'></script></body></html>" />
                    </div>
                    <div>
                        <ul className="info">
                            <li>Notice the function sendMessage called after the form is submitted in <a href="https://aayush-choudhary.github.io/contact.html" target="_blank">Contact Me</a></li>
                            <li>It takes the values of Name, Mail and Message and gets the encrypted link by passing to <code>encryptAndSend("LionArt", 3, name, email, message)</code> where the syntax is <code>encryptAndSend(:(username), :(projectID), :(field1 value), :(field2 value), :(field3 value), :(field4 value), :(field5 value))</code></li>
                            <li>If you only have say 3 fields, your function shall look like: <code>encryptAndSend(:(username), :(projectID), :(field1 value), :(field2 value), :(field3 value))</code></li>
                            <li>This returns you a URL, where we redirect the page to, see lines 87-91 of Aayush's integrateBack.js</li>
                            <li>This would then send the data to our servers who would store it for you and redirect user back to the Endpoint URL specified in the project.</li>
                            <li>Come back to your Project and the message would be added.</li>
                            <li>Yes, it's a bit tedious the first time, but hey, its super-cool and gets simple with use.</li>
                            <li>If you face any issue, you may contact <a href="/aboutus" target="_blank">any of us</a>.</li>
                        </ul>
                    </div>
                </section>
                <div>
                    So that's it. That's how you shall integrate Beyond Static to your Website. In a further update, we shall demonstrate how this can even be achieved in a Python Script. Till then, keep exploring!
                </div>
            </div>
            </div>
            <footer style={{position:'absolute',right:'2%', marginTop:'5%'}}>
            <Footer style={{padding:'0',margin:'0'}}/>
      </footer>
        </div>
    );
}

 