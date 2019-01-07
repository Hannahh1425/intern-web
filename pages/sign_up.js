import Link from 'next/link'

export default () => (
  <div>
  <div className="background"></div>
    <form id="form_id" method="post" name="myform">
      <div className="input-groups">
        <div className="input-group">
          <label>First Name</label>
          <input type="text" name="first_name" id="first_name" ></input>
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input type="text" name="last_name" id="last_name" ></input>
        </div>

        <div className="input-group">
          <label>Company Name</label>
          <input type="text" name="company_name" id="company_name" ></input>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" id="email" ></input>
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input type="number" name="phone" id="phone" ></input>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password_1" id="password_1" ></input>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password_2" id="password_2" ></input>
        </div>

        <Link href="/">
          <button className="btn">Sign up</button>
        </Link>

        <p>
          Already a member? <Link href="/log_in">Log in</Link>
        </p>
      </div>
    </form>
    <style jsx>{`
      .background {
        background-color: rgb(48, 48, 48, 0.8);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
      }

      form {
        border: 1px solid #B0C4DE;
        background: white;
        border-radius: 10px;
        text-align: center;
        margin: 5% 33%;
      }

      .input-groups {
        padding: 70px 70px 20px 70px;
      }

      .input-group {
        padding-bottom: 2em;
      }

      .input-group label {
        font-size: 20px;
        font-weight: 700;
        display: block;
        text-align: left;
        padding-bottom: 0.6em;
      }

      .input-group input {
        width: 100%;
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid gray;
      }

      .btn {
        color: white;
        background: #4C5356;
        border: rgb(0, 0, 0, 0);
        border-radius: 4px;
        font-size: 16px;
        padding: 0.5em;
        cursor: pointer;
      }

    `}</style>
  </div>

)
