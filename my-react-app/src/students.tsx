
function Students({
    name = "agent",
    age = 0,
    IsAstudent = false
}: StudentProps) {
    return (
        <div className="text-center font-medium text-2xl my-15 bg-gray-700 p-10 text-white space-y-4 max-w-auto rounded-full">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>
                Is A Student:{" "}
                {IsAstudent ? "Yes, he is a student" : "Not a student"}
            </p>
        </div>
    );
}

type StudentProps = {
    name?: string;
    age?: number;
    IsAstudent?: boolean;
};

export default Students;