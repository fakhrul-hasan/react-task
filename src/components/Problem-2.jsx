import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";

const Problem2 = () => {
  const [data, setData] = useState();
  const [showEvenOnly, setShowEvenOnly] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(true);
  const [title, setTitle] = useState(true);

  const handleClose = () => setShow(false);
  const allUrl = "https://contact.mediusware.com/api/contacts/?page_size=10";
  const usUrl =
    "https://contact.mediusware.com/api/country-contacts/United%20States/?page_size=5";

  useEffect(() => {
    fetch(url ? allUrl : usUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  const handleCheckboxChange = () => {
    setShowEvenOnly(!showEvenOnly);
  };
    const filteredData = showEvenOnly
? data.results.filter((item) => item.id % 2 === 0)
: data;
setLoading(false);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center align-items-center gap-3">
          <button
            onClick={() => {
              setShow(true), setTitle(true);
            }}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={() => {
              setShow(true), setTitle(false);
            }}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title ? "All Contacts" : "US Contacts"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <thead>
                <tr>
                  <th>Phone</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                { filteredData.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.phone}</td>
                    <td>{contact.country.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <label htmlFor="">
            <input type="checkbox" checked={showEvenOnly} onChange={handleCheckboxChange} />
            Show even only
            </label>
            <Button
              onClick={() => {
                setUrl(!url), setShow(true), setTitle(!title);
              }}
              variant="primary"
            >
              {title ? "US Contacts" : "All Contacts"}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
