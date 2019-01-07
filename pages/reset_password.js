import Link from 'next/link'

export default () => (
  <div>
    <div className="background"></div>
    <form id="form_id" method="post" name="myform">
      <div className="input-groups">
        <div className="input-group">
          <label>Please enter your Email</label>
          <input type="email" name="email" id="email" ></input>
        </div>

        <div>
          <input type="button" className="btn" id="submitBtn" name="login_btn" value="Reset password"/>
        </div>

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
        margin: 10% 35%;
      }

      .input-groups {
        padding: 70px 70px 30px 70px;
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
      }

    `}</style>
  </div>
)
