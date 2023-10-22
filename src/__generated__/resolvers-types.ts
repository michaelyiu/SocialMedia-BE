import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Education = {
  __typename?: 'Education';
  current?: Maybe<Scalars['Boolean']['output']>;
  degree: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fieldOfStudy: Scalars['String']['output'];
  from: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  school: Scalars['String']['output'];
  to?: Maybe<Scalars['String']['output']>;
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  current?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  from: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  to?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEducation?: Maybe<Education>;
  createExperience?: Maybe<Experience>;
  deleteEducation?: Maybe<Scalars['ID']['output']>;
  deleteExperience?: Maybe<Scalars['ID']['output']>;
  deleteProfile?: Maybe<Scalars['Boolean']['output']>;
  editEducation?: Maybe<Education>;
  editExperience?: Maybe<Experience>;
  login?: Maybe<Token>;
  signup?: Maybe<User>;
  updateProfile?: Maybe<Profile>;
};


export type MutationCreateEducationArgs = {
  current?: InputMaybe<Scalars['Boolean']['input']>;
  degree: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fieldOfStudy: Scalars['String']['input'];
  from: Scalars['String']['input'];
  school: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateExperienceArgs = {
  company: Scalars['String']['input'];
  current?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteEducationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditEducationArgs = {
  current?: InputMaybe<Scalars['Boolean']['input']>;
  degree: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  fieldOfStudy: Scalars['String']['input'];
  from: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  school: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditExperienceArgs = {
  company: Scalars['String']['input'];
  current?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationSignupArgs = {
  input?: InputMaybe<SignupInput>;
};


export type MutationUpdateProfileArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  handle: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  skills: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  education?: Maybe<Array<Maybe<Education>>>;
  experience?: Maybe<Array<Maybe<Experience>>>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  handle: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  skills: Array<Maybe<Scalars['String']['output']>>;
  status?: Maybe<Scalars['String']['output']>;
  user: User;
  website?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  education?: Maybe<Education>;
  experience?: Maybe<Experience>;
  hello?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  profileByHandle?: Maybe<Profile>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryProfileArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProfileByHandleArgs = {
  handle: Scalars['String']['input'];
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password2: Scalars['String']['input'];
};

export type Token = {
  __typename?: 'Token';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  profile?: Maybe<Profile>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Education: ResolverTypeWrapper<Education>;
  Experience: ResolverTypeWrapper<Experience>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Profile: ResolverTypeWrapper<Profile>;
  Query: ResolverTypeWrapper<{}>;
  SignupInput: SignupInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Token: ResolverTypeWrapper<Token>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  Education: Education;
  Experience: Experience;
  ID: Scalars['ID']['output'];
  LoginInput: LoginInput;
  Mutation: {};
  Profile: Profile;
  Query: {};
  SignupInput: SignupInput;
  String: Scalars['String']['output'];
  Token: Token;
  User: User;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type EducationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = ResolversObject<{
  current?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  degree?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldOfStudy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  school?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = ResolversObject<{
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  current?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createEducation?: Resolver<Maybe<ResolversTypes['Education']>, ParentType, ContextType, RequireFields<MutationCreateEducationArgs, 'degree' | 'fieldOfStudy' | 'from' | 'school'>>;
  createExperience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType, RequireFields<MutationCreateExperienceArgs, 'company' | 'from' | 'title'>>;
  deleteEducation?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationDeleteEducationArgs, 'id'>>;
  deleteExperience?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationDeleteExperienceArgs, 'id'>>;
  deleteProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  editEducation?: Resolver<Maybe<ResolversTypes['Education']>, ParentType, ContextType, RequireFields<MutationEditEducationArgs, 'degree' | 'fieldOfStudy' | 'from' | 'id' | 'school'>>;
  editExperience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType, RequireFields<MutationEditExperienceArgs, 'company' | 'from' | 'id' | 'title'>>;
  login?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, Partial<MutationLoginArgs>>;
  signup?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationSignupArgs>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'handle' | 'skills'>>;
}>;

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  education?: Resolver<Maybe<Array<Maybe<ResolversTypes['Education']>>>, ParentType, ContextType>;
  experience?: Resolver<Maybe<Array<Maybe<ResolversTypes['Experience']>>>, ParentType, ContextType>;
  githubUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  education?: Resolver<Maybe<ResolversTypes['Education']>, ParentType, ContextType>;
  experience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, Partial<QueryProfileArgs>>;
  profileByHandle?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<QueryProfileByHandleArgs, 'handle'>>;
  profiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Profile']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserArgs>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Date?: GraphQLScalarType;
  Education?: EducationResolvers<ContextType>;
  Experience?: ExperienceResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

