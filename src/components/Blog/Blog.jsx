import React from "react";

const Blog = () => {
  return (
    <div className="w-4/5 mx-auto mt-10 md:mt-24 flex flex-col gap-10 mb-10">
      {/* context api section */}
      <section>
        <h4 className="text-xl font-semibold mb-2">
          Why should i use Context api ?
        </h4>
        <p>
          <span className="text-lg font-medium mr-2">Ans :</span> When we need
          to send global data to a further child component we use context
          api.Because context api saves us from the hassle of prop drilling.
        </p>
      </section>
      {/* custom hooks section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">What are custom hooks ?</h2>
        <p>
          <span className="text-lg font-medium mr-2">Ans :</span>Hooks are
          reuseable functions. When we have component logic that needs to be
          used by multiple components, we can extract that logic to a custom
          Hook.Custom Hooks start with "use". Example: useFetch.
        </p>
      </section>
      {/* useRef section */}
      <section>
        <h3 className="text-xl font-semibold mb-2">What is useRef ?</h3>
        <p>
          <span className="text-lg font-medium mr-2">Ans :</span>useRef is a
          hook.It allows us to persist values between renders.It can be used to
          store a mutable value that does not cause a re-render when updated.If
          we tried to count how many times our application renders using the
          useState Hook, we would be caught in an infinite loop since this Hook
          itself causes a re-render. To avoid this, we can use the useRef Hook.
        </p>
      </section>
      {/* useMemo section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">What is useMemo ?</h2>
        <p>
          <span className="text-lg font-medium mr-2">Ans :</span>The React
          useMemo Hook returns a memoized value.The useMemo Hook only runs when
          one of its dependencies update.The useMemo Hook can be used to keep
          expensive, resource intensive functions from needlessly running.You
          simple pass in a function and an array of inputs and useMemo will only
          recompute the memoized value when one of the inputs has changed.
        </p>
      </section>
    </div>
  );
};

export default Blog;
