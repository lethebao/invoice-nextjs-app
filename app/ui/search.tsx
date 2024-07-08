//"use client" - This is a Client Component, which means you can use event listeners and hooks.
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {useSearchParams, useRouter, usePathname } from 'next/navigation';
export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    console.log(searchParams);

    function handleSearch(text: string) {
        const params = new URLSearchParams(searchParams);
        const pathName = usePathname();
        const {replace } = useRouter();

        if(params) {
            params.set('query', text);
        }else {
            params.delete('query');
        }

        //${pathname} is the current path, in your case, "/dashboard/invoices".
        //As the user types into the search bar, params.toString() translates this input into a URL-friendly format.

        replace(`${pathName}?${params.toString()}`);  //updates the URL with the user's search data. For example, /dashboard/invoices?query=lee if the user searches for "Lee".
    }
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
          onChange={(e) => handleSearch(e.target.value)}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}


// onChange là gì?
//     onChange là một sự kiện (event) được gắn vào các thành phần (components) trong React.
//     Nó được kích hoạt mỗi khi có sự thay đổi trong giá trị của thành phần đó.
//     Trong trường hợp này, onChange được sử dụng trên thẻ <input>, có nghĩa là mỗi khi người dùng gõ ký tự vào ô tìm kiếm,
//     sự kiện onChange sẽ được kích hoạt.
//
//     e.target.value là gì?
//     e đại diện cho sự kiện (event) vừa xảy ra.
//     target là phần tử HTML mà sự kiện đó xảy ra, trong trường hợp này là thẻ <input>.
//     value là giá trị hiện tại của phần tử HTML đó, tức là nội dung mà người dùng đã nhập vào ô tìm kiếm.

// onChange={(e) => { e.target.value }}:
// Mỗi khi người dùng nhập một ký tự vào ô tìm kiếm,
// hàm bên trong onChange sẽ được gọi với tham số e là sự kiện.
// e.target.value sẽ chứa giá trị mới nhất của ô tìm kiếm.

