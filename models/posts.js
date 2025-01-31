// models/getPosts.js
const pool = require("../database/connectDB");
const Statuscode = require("../helpers/status_code_helper");

const getPosts = async () => {
  console.log("getPosts");
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();
    const sql = "SELECT * FROM posts";
    const [results] = await connection.query(sql);

    if (results.length === 0) {
      console.log("No posts found");
      connection.rollback();
      return Statuscode.NOT_FOUND("No posts found");
    }
    connection.commit();
    return Statuscode.OK(results);
  } catch (error) {
    console.log("Error fetching addposts : ", error);
    return Statuscode.UNKNOWN(error.sqlMessage);
  } finally {
    if (connection) await connection.release();
  }
};

const addPost = async (id, content) => {
  console.log("Add Post");
  let connection;
  try {
    connection = await pool.getConnection();
    const sql = `INSERT INTO posts (title, content) value (?, ?)`;
    const [result] = await connection.query(sql, [id, content]);
    if (result.affected == 0) {
      return Statuscode.UNKNOWN("Fail to add posts.");
    }
    return Statuscode.OK(null, "Post added successfully");
  } catch (error) {
    console.log("Error fetching addposts : ", error);
    return Statuscode.UNKNOWN(error.sqlMessage);
  } finally {
    if (connection) await connection.release();
  }
};

const editPost = async (id,title,content) => {
  console.log("Edit Post");
  let connection;
  try {
    connection = await pool.getConnection();
    const sql = `UPDATE posts SET title = ?, content = ? WHERE id = ?`
    const [result] =  await connection.query(sql,[title, content, id])
    if (result.affected == 0) {
      return Statuscode.UNKNOWN("Fail to edit post.");
    }
    return Statuscode.OK(null, "Post edited successfully");
  } catch (error) {
    console.log("Error fetching addposts : ", error);
    return Statuscode.UNKNOWN(error.sqlMessage);
  } finally {
    if (connection) await connection.release();
  }
};

module.exports = { getPosts, addPost,editPost };
