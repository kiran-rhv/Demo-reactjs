import React from "react";
import "./Footer.css";

const PageFooter = () => {
  return (
    <div className="footerBackground">
      <footer className="page-footer font-small blue pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <div>
                Here you can use rows and columns to organize your footer
                content.
              </div>
            </div>
            <p className="clearfix w-100 d-md-none pb-3"></p>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
                <li>
                  <a>Link 3</a>
                </li>
                <li>
                  <a>Link 4</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
                <li>
                  <a>Link 3</a>
                </li>
                <li>
                  <a>Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a> Artistry</a>
        </div>
      </footer>
    </div>
  );
};

export default PageFooter;
