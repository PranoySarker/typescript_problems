## Difference between interface and types:

Interface এবং types এর মধ্যে পার্থক্য হলো interface কে class এর সাথে extend করা যায় কিন্ত types কে করা যায় না। আবার type এর মধ্যে union, intersection করা যায় কিন্ত interface এ করা যায় না ।
উদাহরন্স্বরূপ, type = string | number অথবা type = type1 & type2 এটা করা যায়।
এবং interface ColoredRectangle extends Rectangle {.....}

## What is the use of the keyof keyword in TypeScript? Provide an example:

Typescript এ keyof হলো একটি অবজেক্ট টাইপ অপারেটর যা সেই অবজেক্টের key এর string এবং number টাইপগুলি union করে জেনারেট করে দেয়। এটি ওই key এর রেফারেন্স টাইপ পাঠায়।
উদাহরন,
type Account = {
username: string;
email: string;
password: string;
role: string;
};

type AccountKeys = keyof Account;

এখানে AccountKeys হলো username, email, password, role

function getAccountValue(account: Account, key: AccountKeys) {
return account[key];
}

const user: Account = {
username: "pranoy",
email: "pranoy@example.com",
password: "123456",
role: "admin",
};

const value = getAccountValue(user, "email");

console.log(value); // Output: "pranoy@example.com"
