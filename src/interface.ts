interface User {
    name: string,
    age?: number,
    readonly isMale: boolean,
    say: (words: string) => string
}

const getUserName = (user: User):void => {
    console.log(user.name);
    user.say(user.name);
}

const user: User = {
    name: 'Tom',
    isMale: false,
    say(words: string) {
        return 'hello world'
    }
}

getUserName(user)