import React from 'react';
import Common from './Common';
import { NavLink } from "react-router-dom";
import profile from './profile.png'

const AdminPanel = (props) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6   order-2 order-lg-1 mt-lg-5 ">
                <div style={{display : 'flex',justifyContent : 'cenetr'}}><img src={profile} style={{width : '150px'}} alt="" /></div>
                <h1>
                  Hello! <strong className="brand-name">Admin Name</strong>
                </h1>
                <p className="my-3">
                  Welcome to admin panel page here you manage your data and start learning!
                </p>
                <div className="mt-3 ">
                  <NavLink to='/courses' className="btn-get-started">
                    Start your lectures!
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <h1 className='fluid'>Services</h1>
                <div className="container text-center">
                  <div className="row">
                    <div class="col">
                      {/* cards */}
                      <div className="card text-bg-primary mb-3 cardm" style={{ maxWidth: '18rem', height :"93%", textDecoration: 'none' }}>
                        <div class="card-header">Versant Test</div>
                        <div class="card-body">
                          <h5 class="card-title">Test Your Accent by taking Test</h5>
                          <NavLink to='/test'> 
                          <button className='btn btn-success'>Click me!</button>
                          </NavLink>
                        </div>
                      </div>
                      
                    </div>
                    <div class="col">
                     
                      <div class="card text-bg-danger mb-3 cardm" style={{ maxWidth: '18rem', height :"93%", textDecoration: 'none' }}>
                        <div class="card-header">Versant Test</div>
                        <div class="card-body">
                          <h5 class="card-title">Learning by joining full course</h5>
                          <NavLink to='/courses'> 
                          <button className='btn btn-success'>Click me!</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col">
                      {/* cards */}
                      <div class="card text-bg-light mb-3 cardm" style={{ maxWidth: '18rem', height :"93%", textDecoration: 'none' }}>
                        <div class="card-header">Versant Test</div>
                        <div class="card-body">
                          <h5 class="card-title">Test Your Accent by taking Test</h5>
                          <NavLink to='/course'> 
                          <button className='btn btn-success'>Click me!</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                    <div class="card text-bg-dark mb-3 cardm" style={{ maxWidth: '18rem', height :"93%", textDecoration: 'none' }}>
                        <div class="card-header">Versant Test</div>
                        <div class="card-body">
                          <h5 class="card-title">Test Your Accent by taking Test</h5>
                          <NavLink to='/course'> 
                          <button className='btn btn-success'>Click me!</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
