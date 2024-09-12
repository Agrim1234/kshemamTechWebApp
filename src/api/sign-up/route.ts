export async function POST(request: Request) {
  try {
    const { phoneOrEmail, verifyCode } = await request.json();

    const isPhone = phoneOrEmail.match(/^\d{10}$/);
    const isEmail = phoneOrEmail.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);

    const existingUserByPhoneOrEmail = true;
    const existingUserByUserName = true;

    if (existingUserByPhoneOrEmail) {
        // check if phoneOrEmail is phone or email
        const message = isPhone ? "Phone number already exists" : isEmail ? "Email already exists" : "User already exists";

      return Response.json(
        {
          success: false,
          message,
        },
        {
          status: 400,
        }
      );
    }
    if (existingUserByUserName) {
      return Response.json(
        {
          success: false,
          message: "Username already exists",
        },
        {
          status: 400,
        }
      );
    }

    // register user
    return Response.json(
      {
        success: true,
        message: "User registered successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Couldn't register User", error);
    return Response.json(
      {
        success: false,
        message: "Couldn't register User",
      },
      {
        status: 500,
      }
    );
  }
}
