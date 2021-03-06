#include "myobject.h"

namespace demo {

    using v8::Function;
    using v8::FunctionCallbackInfo;
    using v8::FunctionTemplate;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Object;
    using v8::Persistent;
    using v8::String;
    using v8::Value;

    Persistent<Function> MyObject::constructor;

    MyObject::MyObject(double value) : value_(value) {
    }

    MyObject::~MyObject() {
    }

    void MyObject::Init(Local<Object> exports) {
        Isolate* isolate = exports->GetIsolate();

        // prepare constructor template
        Local<FunctionTemplate> tpl = FunctionTemplate::New(isolate, New);
        tpl->SetClassName(String::NewFromUtf8(isolate, "MyObject"));

        tpl->InstanceTemplate()->SetInternalFieldCount(1);

        // prototype
        NODE_SET_PROTOTYPE_METHOD(tpl, "PlusOne", PlusOne);
        constructor.Reset(isolate, tpl->GetFunction());
        exports->Set(String::NewFromUtf8(isolate, "MyObject"), tpl->GetFunction());
    }

    void MyObject::New(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();

        if(args.IsConstructCall()) {
            // Invoked as constructor: new Object(...)
            double value = args[0]->IsUndefined() ? 0 : args[0] -> NumberValue();
            MyObject* obj = new MyObject(value);
            obj->Wrap(args.This());
            args.GetReturnValue().Set(args.This());
        } else {
            const int argc = 1;
            Local<Value> argv[argc] = { args[0] };
            Local<Function> cons = Local<Function>::New(isolate, constructor);
            args.GetReturnValue().Set(cons->NewInstance(argc, argv));
        }
    }

    void MyObject::PlusOne(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();

        MyObject* obj = ObjectWrap::Unwrap<MyObject>(args.Holder());

        obj->value_ += 1;

        args.GetReturnValue().Set(Number::New(isolate, obj->value_));
    }

} // namespace demo
