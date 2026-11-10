Type '{ children: Element[]; class: string; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
Property 'class' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'. Did you mean 'className'?

Type 'string' is not assignable to type 'number'.
index.d.ts(2903, 9): The expected type comes from property 'tabIndex' which is declared here on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'

Property 'app' does not exist on type 'JSX.IntrinsicElements'.

Type '{ title: string; }' is not assignable to type 'ReactNode'.
index.d.ts(2361, 9): The expected type comes from property 'children' which is declared here on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'

1. class instead of className
   Cause: HTML uses class, but React uses className.
   Fix: Change class="..." to className="...".

2. tabIndex given a string
   Cause: You wrote tabIndex="0", which is text. React expects a number.
   Fix: Change it to tabIndex={0}.

3. App is an JSXintrinsic element

4. An object placed where text should go
   Cause: You put an object inside a <p>, such as { title: "..." } or a whole book object. React can only display text, numbers, or elements, not objects.
   Fix: Pick the property you want. For example, {book.title} instead of {book}.

All React at runtime.
