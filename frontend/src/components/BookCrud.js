import axios from "axios";
import { useEffect, useState } from "react";
 
function BookCrud() {
  const [_id, setId] = useState("");
  const [tytul, setTytul] = useState("");
  const [opis, setOpis] = useState("");
  const [url, setUrl] = useState("");
  const [bookshelf, setBooks] = useState([]);
 
  useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    const result = await axios.get("http://localhost:8000/getAll");
    setBooks(result.data.data);
    console.log(result.data);
  }
 
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/create", {
        tytul: tytul,
        opis: opis,
        url: url,
      });
      alert("Książka została dodana");
      setId("");
      setTytul("");
      setOpis("");
      setUrl("");
      Load();
    } catch (err) {
      alert("Wystąpił błąd przy dodawaniu książki");
    }
  }
  async function editBook(bookshelf) {
    setTytul(bookshelf.tytul);
    setOpis(bookshelf.opis);
    setUrl(bookshelf.url);
 
    setId(bookshelf._id);
  }
 
  async function DeleteBook(_id) {
    await axios.delete("http://localhost:8000/delete/" + _id);
    alert("Książka została usunięta");
    Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "http://localhost:8000/update/" +
          bookshelf.find((u) => u._id === _id)._id || _id,
        {
          _id: _id,
          tytul: tytul,
          opis: opis,
          url: url,
        }
      );
      alert("Książka została zaktualizowana");
      setId("");
      setTytul("");
      setOpis("");
      setUrl("");
      Load();
    } catch (err) {
      alert(err);
    }
  }
 
  return (
    <div class="card">
      <h1 class="card-header text-center m-2   ">Lista książek</h1>
      <div class="card-body m-5 text-center">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label><p class="lead">Tytuł książki</p></label>
            <input
              type="text"
              class="form-control"
              id="tytul"
              value={tytul}
              onChange={(event) => {
                setTytul(event.target.value);
              }}
            />
          </div>
          <div class="form-group mt-2">
            <label><p class="lead">Opis książki</p></label>
            <input
              type="text"
              class="form-control mb-2"
              id="opis"
              value={opis}
              onChange={(event) => {
                setOpis(event.target.value);
              }}
            />
          </div>
 
          <div class="form-group">
            <label><p class="lead">Adres URL lub gdzie można znależć tą książkę</p></label>
            <input
              type="text"
              class="form-control"
              id="url"
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </div>
 
          <div class="text-center mt-5">
            <button class="btn btn-primary m-4 btn-lg" onClick={save}>
              Dodaj książkę
            </button>
            <button class="btn btn-warning m-4 btn-lg" onClick={update}>
              Zaktualizuj książkę
            </button>
          </div>
        </form>
      </div>
 
      <table class="table table-hover table-dark" align="center">
        <thead class="">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tytuł</th>
            <th scope="col">Opis</th>
            <th scope="col">URL</th>
 
            <th scope="col">Opcje</th>
          </tr>
        </thead>
        {bookshelf.map(function fn(book) {
          return (
            <tbody>
              <tr>
                <th scope="row">{book._id} </th>
                <td>{book.tytul}</td>
                <td>{book.opis}</td>
                <td>{book.url}</td>
                <td>
                  <button 
                    type="button"
                    class="btn btn-warning m-1"
                    onClick={() => editBook(book)}
                  >
                    Edytuj
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger m-1"
                    onClick={() => DeleteBook(book._id)}
                  >
                    Usuń
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
 
export default BookCrud;