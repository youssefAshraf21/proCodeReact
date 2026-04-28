type Props = {
    isloggedIn?: boolean;
    username?: string;
}

function UserGreeter({ isloggedIn = false, username = "guest" }: Props) {
    
    let WelcomeMessage = (
        <div className="text-center font-medium text-2xl my-15 bg-green-700 p-10 text-white space-y-4 max-w-auto rounded-xl">
            Welcome {username}
        </div>
    );
    let loginPrompt = (
        
            <h1 className="text-center font-medium text-2xl my-15 bg-red-700 p-10 text-white space-y-4 max-w-3xl rounded-xl">
                Please log in to see the welcome message.
            </h1>
        
    );

      return (
    <div className="flex justify-center my-10">
      {isloggedIn ? WelcomeMessage : loginPrompt}
    </div>
  );
}

export default UserGreeter;