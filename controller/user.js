function getallBooks(req, res, next) {
  try {
    req.getConnection((err, connection) => {
      if (err) return next(err);
      connection.query("SELECT * FROM books", (err, results) => {
        if (err) return next(err);
        res.send(results);
      });
    });
  } catch (error) {
    next(error);
  }
}

function insertBooks(req, res, next) {
  try {
    req.getConnection((err, connection) => {
      if (err) return next(err);
      connection.query(
        "INSERT INTO books set ?",
        [req.body],
        (err, results) => {
          if (err) return next(err);
          res.send("books inserted");
        },
      );
    });
  } catch (error) {
    next(error);
  }
}
function deleteBook(req, res, next) {
  try {
    const id = req.params.id;
    req.getConnection((err, connection) => {
      if (err) return next(err);
      connection.query(
        `DELETE FROM books WHERE id = ? `,
        [id],
        (err, results) => {
          if (err) return next(err);
          res.send("books deleted");
        },
      );
    });
  } catch (error) {
    next(error);
  }
}
function updateBook(req, res, next) {
  try {
    const id = req.params.id;
    req.getConnection((err, connection) => {
      if (err) return next(err);
      connection.query(
        `UPDATE books set ? WHERE id = ? `,
        [req.body, id],
        (err, results) => {
          if (err) return next(err);
          res.send("books updated");
        },
      );
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { getallBooks, insertBooks, deleteBook, updateBook };
