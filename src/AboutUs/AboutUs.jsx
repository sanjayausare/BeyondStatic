import React from 'react';
import Card from './DetailsCard'
import Navbar from './Navbar'
import './AboutUs.css'
const team = require('./TeamDetails.json');

const AboutUs = () => {
    
    return(
        <div className="body">
            <div className="header"><Navbar style={{padding:'0',margin:'0'}}/>
            <div style={{height:'65px',display:'block'}}></div>
            </div>
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas sit unde inventore ex a nobis quidem, repudiandae iste amet sapiente excepturi doloribus, 
                eos neque ipsum quos qui error quae commodi. Perspiciatis provident vel eum, 
                et accusantium repudiandae voluptates debitis blanditiis. Alias impedit, cum iure sint corrupti 
                explicabo natus est dicta aliquid, officiis atque hic ut eos cupiditate voluptate odit perferendis 
                facilis vel saepe nisi quam. Ab consectetur itaque accusantium, nobis aliquid enim, quod, hic 
                repellat perferendis dicta explicabo aliquam! Excepturi nemo ducimus unde, earum nostrum vero sit, 
                esse hic quasi quibusdam quos, tempora a eligendi dicta iusto! Illo, cum eligendi!
            </div>
            <div className="profiles">
                <h1>Our Team</h1>

            <div className="cards-container container">
                <div className="row">
                    
                    {team.map((member) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12">
                            <Card key={team.id} {...member}/>
                            </div>
                        );
                    })}
                              
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutUs